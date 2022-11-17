import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";
import pluginConfigs from "./plugins";
import headConfigs from "./head";
import themeConfigs from "./theme";

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineUserConfig({
  lang: "zh-CN",
  title: "CHINQBlog",
  description: "Stay young 😙",
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],
  plugins: pluginConfigs,
  head: headConfigs,
  theme: hopeTheme(themeConfigs),
  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          output: {
            sanitizeFileName(fileName) {
              const match = DRIVE_LETTER_REGEX.exec(fileName);
              const driveLetter = match ? match[0] : "";
              return (
                driveLetter +
                fileName
                  .slice(driveLetter.length)
                  .replace(INVALID_CHAR_REGEX, "")
              );
            },
          },
        },
      },
    },
  }),
});
