import {useEffect} from 'react'
import './App.css'
import {client} from "./shared/api/client.ts";

function App() {
    useEffect(() => {
        (async function() {
            const response = await client.GET('/playlists')
            const data = response.data
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
