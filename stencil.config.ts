import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import nodePolyfills from "rollup-plugin-node-polyfills";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.scss",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://prominent-colors.netlify.com/"
    }
  ],
  plugins: [sass(), nodePolyfills()]
};
