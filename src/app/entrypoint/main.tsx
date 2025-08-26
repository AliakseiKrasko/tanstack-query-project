import '../style/resen.css'
import '../style/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

// Import the generated route tree
import {routeTree} from '../../routeTree.gen.ts'
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {createRoot} from "react-dom/client";

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            gcTime: 5 * 1000
        }
    }
})

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
