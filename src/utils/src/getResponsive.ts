export default function getResponsive() {
  if (typeof window !== 'undefined') {
    return { height: window.innerHeight, width: window.innerWidth };
  }
  return { height: 0, width: 0 };
}
