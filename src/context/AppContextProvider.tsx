import { ReactNode, useState } from "react"
import { AppContext } from "./AppContext"

interface AppContextProviderProps {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [modal, setModal] = useState(false)

  function toggleModal() {
    setModal(!modal)
  }

  return (
    <AppContext.Provider value={{
      modal,
      toggleModal
    }}>
      {children}
    </AppContext.Provider>
  )
}
