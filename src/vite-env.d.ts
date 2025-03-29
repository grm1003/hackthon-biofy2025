/// <reference types="vite/client" />
declare module "*.svg?react" {
  import { FC, SVGProps } from "react";

  export default FC<SVGProps<SVGSVGElement>>;
}

interface ImportMetaEnv {}

interface ImportMeta {
  env: Partial<ImportMetaEnv>;
}

namespace JSX {
  interface IntrinsicElements {}
}
