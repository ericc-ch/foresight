import type { ReactNode } from "react"

import clsx from "clsx"

import classes from "./container.module.css"

interface ContainerProps {
  children?: ReactNode
  centered?: boolean
}

export function Container({ children, centered = false }: ContainerProps) {
  return <main className={clsx(classes.container, centered && classes.centered)}>{children}</main>
}
