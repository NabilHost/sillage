/** Concatène des classes conditionnelles (équivalent léger de clsx). */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
