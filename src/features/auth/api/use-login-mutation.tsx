import {useMutation, useQueryClient} from "@tanstack/react-query";
import {client} from "../../../shared/api/client.ts";

export const callbackUrl = 'http://localhost:5173/oauth/callback'

export const UseLoginMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({code}: { code: string }) => {
            const response = await client.POST('/auth/login', {
                body: {
                    code: code,
                    redirectUri: callbackUrl,
                    accessTokenTTL: '10s',
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
            queryClient.invalidateQueries({
                queryKey: ['auth', 'me']
            })
        }
    })



    return mutation;

}