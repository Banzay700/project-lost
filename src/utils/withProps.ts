export const withProps = (...props: string[]) => {
  return {
    shouldForwardProp: (prop: string) => !props.includes(prop),
  }
}
