import RememberLastLogin from "@/components/lab/01-remember-last-login/RememberLastLogin";
import InputAutofocus from "@/components/lab/02-input-autofocus/InputAutofocus";

export type TinyUx = {
  id: string;
  title: string;
  description: string;
  Component: () => React.ReactElement;
  codeUrl: string;
};

export const tinyuxList: TinyUx[] = [
  {
    id: "01-remember-last-login",
    title: "#01 — Remember Last Login",
    description: "Automatically shows the login method you used last time",
    Component: RememberLastLogin,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/01-remember-last-login",
  },
  {
    id: "02-input-autofocus",
    title: "#02 — Smart Input Focus on Keypress",
    description: "Focuses the input after first keypress to avoid scroll jump",
    Component: InputAutofocus,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/02-input-autofocus",
  },
];
