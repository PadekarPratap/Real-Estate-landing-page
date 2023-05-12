import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RootLayout from "./layout/RootLayout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
        <Route index element={<HomePage />} />
    </Route>
  )
)


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App