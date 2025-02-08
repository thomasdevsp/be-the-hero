import { Route, Routes } from "react-router"
import { DashboarLayout } from "./layouts/DashboardLayout"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Cadastro } from "./pages/cadastro"
import { Dashboard } from "./pages/dashboard"
import { Login } from "./pages/login"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>

      <Route path="/dashboard" element={<DashboarLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>

    </Routes>
  )
}
