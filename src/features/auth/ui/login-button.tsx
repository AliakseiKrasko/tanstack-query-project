import {useMutation} from "@tanstack/react-query";
import {client} from "../../../shared/api/client.ts";

export const LoginButton = () => {
    const mutation = useMutation({
        mutationFn: async ({code}: {code: string}) => {
            const response = await client.POST('/auth/login', {
                body: {
                    code: code,
                    redirectUri: '',
                    accessTokenTTL: '1d',
                    rememberMe: true
                }
            })
            if (response.error) {
                throw new Error(response.error.message)
            }
            return response.data
        }
    })

    const handleLoginClick = () => {
        const callbackUrl = 'http://localhost:5173/oauth/callback'
        window.open(`https://musicfun.it-incubator.app/api/1.0/auth/oauth-redirect?callbackUrl=${callbackUrl}`, 'apihub-oauth2', 'width=500, height=600');
    }
    return (
        <button onClick={handleLoginClick}>Login with APIHUB</button>
    );
};