import { viteBundler } from "@vuepress/bundler-vite";

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default viteBundler({
  viteOptions: {
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : "";
            return (
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
            );
          },
        },
      },
    },
  },
});
