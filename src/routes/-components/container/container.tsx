import type { ReactNode } from "react"

import clsx from "clsx"

import classes from "./container.module.css"

interface ContainerProps {
  children?: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <main className={clsx(classes.container)}>{children}</main>
}
