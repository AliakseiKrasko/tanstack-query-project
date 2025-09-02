import {useMutation} from "@tanstack/react-query";
import {client} from "../../../shared/api/client.ts";

export const LoginButton = () => {
    const callbackUrl = 'http://localhost:5173/oauth/callback'
    const mutation = useMutation({
        mutationFn: async ({code}: { code: string }) => {
            const response = await client.POST('/auth/login', {
                body: {
                    code: code,
                    redirectUri: callbackUrl,
                    accessTokenTTL: '1d',
                    rememberMe: true
                }
            })
            if (response.error) {
                throw new Error(response.error.message)
            }
            return response.data
        },
        onSuccess: (data) => {
            localStorage.setItem('musicfun-refresh-token', data.refreshToken)
            localStorage.setItem('musicfun-access-token', data.accessToken)
        }
    })

    const handleLoginClick = () => {
        window.addEventListener('message', handOauthMessage)

        window.open(`https://musicfun.it-incubator.app/api/1.0/auth/oauth-redirect?callbackUrl=${callbackUrl}`, 'apihub-oauth2', 'width=500, height=600');
    }

    const handOauthMessage = (event: MessageEvent) => {
        window.removeEventListener('message', handOauthMessage)
        if (event.origin !== document.location.origin) {
            console.log('origin not match')
            return
        }
        const code = event.data.code
        if (!code) {
            console.warn('invalid code')
        }
        mutation.mutate({code})
    }
    return <button onClick={handleLoginClick}>Login with APIHUB</button>

};