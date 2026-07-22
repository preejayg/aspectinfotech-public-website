// Type declarations for lucide ESM icon modules
// These are runtime-only imports that don't ship .d.ts files in v1.22+
declare module 'lucide/dist/esm/icons/*.mjs' {
  import type { FC, SVGProps } from 'lucide';
  const icon: (props: SVGProps<SVGSVGElement>) => SVGSVGElement;
  export default icon;
}
