import {useMutation} from "@tanstack/react-query";
import {client} from "../../../shared/api/client.ts";

export const LoginButton = () => {
    useMutation({
        mutationFn: async () => {
            const response = await client.POST('/auth/login', {
                body: {
                    code: '',
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
    }
    return (
        <button onClick={handleLoginClick}>Login with APIHUB</button>
    );
};