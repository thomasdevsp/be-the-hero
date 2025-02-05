import { Route, Routes } from "react-router"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Cadastro } from "./pages/cadastro"
import { Login } from "./pages/login"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  )
}
