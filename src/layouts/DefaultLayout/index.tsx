import { Outlet } from "react-router"
import { LayoutContainer } from "./style.modules"

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}
