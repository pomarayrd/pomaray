import { getTokenUser } from "@/app/actions/auth";
import { type NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
	try {
		const currentUser = await getTokenUser();
		if (!currentUser.results) {
			throw new Error("Is not logged in");
		}

		return NextResponse.next();
	} catch {
		return NextResponse.redirect(new URL("/acceder", request.url));
	}
};

export default middleware;

export const config = {
	matcher: ["/admin/:path*"],
};
