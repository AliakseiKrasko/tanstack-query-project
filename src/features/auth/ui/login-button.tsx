import {callbackUrl, UseLoginMutation} from "../api/use-login-mutation.tsx";

export const LoginButton = () => {
    const mutation = UseLoginMutation()

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