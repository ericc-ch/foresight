import config from "@echristian/eslint-config"
import routerPlugin from "@tanstack/eslint-plugin-router"

export default config(
  {
    react: {
      enabled: true,
    },
    reactHooks: {
      enabled: true,
    },

    prettier: {
      tailwindStylesheet: "./src/app.css",
      plugins: ["prettier-plugin-packagejson"],
    },
  },
  {
    extends: [routerPlugin.configs["flat/recommended"]],
  },
)
