import { Outlet } from "react-router"
import { Header } from "../../components/header"

export function DashboarLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
