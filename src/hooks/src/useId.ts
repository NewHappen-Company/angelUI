import * as React from "react"

type IdContextValue = {
  prefix: number
  current: number
}

const defaultIdContext: IdContextValue = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0,
}

const IdContext = React.createContext<IdContextValue>(defaultIdContext)

export const IdProvider: React.FC = React.memo(({ children }: any) => {
  const currentContext = React.useContext(IdContext)
  const isRoot = currentContext === defaultIdContext
  const context: IdContextValue = React.useMemo(
    () => ({
      prefix: isRoot ? 0 : ++currentContext.prefix,
      current: 0,
    }),
    [isRoot, currentContext],
  )

  return React.createElement(IdContext.Provider, { value: context }, children)
})

export function useId(idProp?: string, prefix?: string): string {
  const context = React.useContext(IdContext)
  return React.useMemo(
    () =>
      idProp ||
      [prefix, context.prefix, ++context.current].filter(Boolean).join("-"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [idProp, prefix],
  )
}

export function useIds(idProp?: string, ...prefixes: string[]) {
  const id = useId(idProp)
  return React.useMemo(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`)
  }, [id, prefixes])
}

export function useOptionalPart<T = any>(partId: string) {
  const [id, setId] = React.useState<string | null>(null)
  const ref = React.useCallback(
    (node: T) => {
      setId(node ? partId : null)
    },
    [partId],
  )
  return { ref, id, isRendered: Boolean(id) }
}