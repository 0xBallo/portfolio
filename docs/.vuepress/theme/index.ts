import { defaultTheme, DefaultThemeOptions, ThemeObject } from "vuepress";
import { path } from "@vuepress/utils";

const themeConfig: ThemeObject = {
    name: "vuepress-theme-custom",
    layouts: {
        Home: path.resolve(__dirname, 'layout/Home.vue'),
    }
}

export const useCustomTheme = (options: DefaultThemeOptions): ThemeObject => {
    return {
        ...themeConfig,
        extends: defaultTheme(options),
    }
}