// https://nextjs.org/docs/app/building-your-application/authentication#setting-up-middleware

import { NextResponse } from "next/server";

const middleware = () => {
	return NextResponse.next();
};

export default middleware;
