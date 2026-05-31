// "Akash Mishra" wordmark placeholder. Replace with a real logotype when available.
export function LogoWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1180 256"
      {...props}
    >
      <text
        x="0"
        y="52%"
        dominantBaseline="central"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontWeight="700"
        fontSize="180"
        letterSpacing="-6"
        fill="currentColor"
      >
        Akash Mishra
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1180 256"><text x="0" y="52%" dominant-baseline="central" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="180" letter-spacing="-6" fill="currentColor">Akash Mishra</text></svg>`
}
