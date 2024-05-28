import { getTokenUserSafe } from "@/app/_actions/auth";
import { type NextRequest, NextResponse } from "next/server";

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
	redis: kv,
	limiter: Ratelimit.slidingWindow(100, "10 s"),
});

const middleware = async (request: NextRequest) => {
	const ip = request.ip ?? "127.0.0.1";
	const currentUser = await getTokenUserSafe();
	const { success } = await ratelimit.limit(ip);

	if (!currentUser && request.url.includes("/admin")) {
		return NextResponse.redirect(new URL("/acceder", request.url));
	}

	if (!success) {
		return NextResponse.redirect(new URL("/limit", request.url));
	}

	return NextResponse.next();
};

export const config = {
	matcher: ["/", "/admin/:path*"],
};

export default middleware;
