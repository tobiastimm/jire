export function ripple(backgroundColor, rippleColor) {
  return `
  transition: background 0.4s ease-out;
  background-position: center;
  &:hover {
    background: ${backgroundColor}
      radial-gradient(circle, transparent 1%, ${backgroundColor} 1%)
      center/15000%;
  }
  &:active {
    background-color: ${rippleColor};
    background-size: 100%;
    transition: background 0s;
  }
`
}
