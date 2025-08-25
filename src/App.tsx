import {useEffect} from 'react'
import './App.css'

function App() {
    useEffect(() => {
        (async function() {
            const response = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists', {
                headers: {
                    'api-key': '0a1c6360-ea6a-430d-a59c-d41a877afc87'
                }
            })
            const data = await response.json()
            console.log(data)
        })()
    }, []);

  return (
    <>
    Hello world!
    </>
  )
}

export default App
