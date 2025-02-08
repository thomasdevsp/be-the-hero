import { Outlet } from "react-router"
import { LayoutContainer } from "./style"

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}
