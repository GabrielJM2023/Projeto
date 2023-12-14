import { NextRequest } from "./node_modules/next/server";
import { NextResponse } from "./node_modules/next/server";

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

import { RedirectType } from 'next/navigation'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    try {
        console.log("middleware")
        const supabase = createMiddlewareClient({ req, res })
        const {
            data: { session },
        } = await supabase.auth.getSession()

        if (session) {
            redirect("/home", RedirectType.replace)
        } else {
            redirect("/login", RedirectType.replace)
        }

    } catch (error) {
        console.log("middleware", error)
    }
    return res
}