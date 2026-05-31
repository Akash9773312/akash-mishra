// Simple "AM" monogram placeholder. Replace with Akash's real logo/mark when available.
export function LogoMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256"
      aria-hidden
      {...props}
    >
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontWeight="700"
        fontSize="150"
        letterSpacing="-8"
        fill="currentColor"
      >
        AM
      </text>
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><text x="50%" y="52%" text-anchor="middle" dominant-baseline="central" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="150" letter-spacing="-8" fill="currentColor">AM</text></svg>`
}
