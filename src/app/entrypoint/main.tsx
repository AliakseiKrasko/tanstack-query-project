import {createRoot} from 'react-dom/client'
import '../style/resen.css'
import '../style/index.css'
import App from '../../App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
