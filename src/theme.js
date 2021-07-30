import { extendTheme } from "@chakra-ui/react";

const PinInputField = {
  variants: {
    custom_filled: {
      bg: "whiteAlpha.400",
    },
  },
};
const Button = {
  baseStyle: {
    padding: "1em 2em 1em 2em",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    main_button: {
      borderRadius: 10,
      fontSize: "0.75em",
      bg: "white",
      color: "primary",
      transitionDuration: "0s",
      _active: {
        bg: "primary",
        color: "white",
        border: "3px solid white",
      },
    },
    bg_fill: {
      borderRadius: 2,
      fontSize: "1em",
      bg: "white",
      color: "black",
      _hover: {
        bg: "white",
      },
      _active: {
        bg: "white",
      },
    },
    bg_outline: {
      borderRadius: 2,
      fontSize: "1em",
      bg: "black",
      color: "white",
      _hover: {
        bg: "black",
      },
      _active: {
        bg: "black",
      },
    },
  },
};

export const theme = extendTheme({
  fonts: {
    heading: "Noto Sans KR",
    body: "Noto Sans KR",
  },
  styles: {
    global: {
      html: {
        fontSize: ["16px", "20px", "24px"],
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      },
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  colors: {
    primary: "#7879F1",
    white: "#FFFFFF",
    black: "#323232",
    notice: "#E000E5",
    tts: "#69B53B",
    calander: "#FFC700",
    hyperlink: "#71AAFF",
  },
  components: { Button, PinInputField },
});
