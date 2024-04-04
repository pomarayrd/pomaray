import { getTokenUser } from "@/app/_actions/auth";
import { type NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
	return NextResponse.next();
	try {
		const currentUser = await getTokenUser();
		if (!currentUser) {
			throw new Error("Is not logged in");
		}

		return NextResponse.next();
	} catch {
		return NextResponse.redirect(new URL("/acceder", request.url));
	}
};

export const config = {
	matcher: ["/admin/:path*"],
};

export default middleware;
