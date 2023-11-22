declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_SUPABASE_URL: String;
            NEXT_PUBLIC_SUPABASE_ANON_KEY: String;
        }
    }
}

export { }