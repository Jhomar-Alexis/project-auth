import { createAuthClient } from "better-auth/vue"
import { env } from "process"
export const authClient = createAuthClient({
    baseURL: env.BETTER_AUTH_URL
})