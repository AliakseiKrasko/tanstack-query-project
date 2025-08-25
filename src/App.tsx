import './App.css'
import {useQuery} from "@tanstack/react-query";
import {client} from "./shared/api/client.ts";

function App() {

    const query = useQuery({
        queryKey: ['playlist'],
        queryFn: () => client.GET('/playlists')

    })

  return (
    <>
        {query.data?.data?.data.map((item) => (
            <li>{item.attributes.title}</li>
        ))}
    Hello world!
    </>
  )
}

export default App
