import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode("#f8fafc", "#030712")(props),
      overflowX: "hidden",
    },
  }),
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles })

export default theme