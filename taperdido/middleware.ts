import { NextRequest } from "./node_modules/next/server";
import { NextResponse } from "./node_modules/next/server";

import { createMiddlewareClient } from "./node_modules/@supabase/auth-helpers-nextjs/dist/index";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    try {
        const supabase = createMiddlewareClient({ req, res })
        await supabase.auth.getSession()

    } catch (error) {
        console.log("middleware", error)
    }
    return res
}