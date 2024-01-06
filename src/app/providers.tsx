import { ReactNode } from "react"

import GlobalStyles from "@/styles/global"

interface Props {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <>
      {/* <GlobalStyles /> */}
      {children}
    </>
  )
}
