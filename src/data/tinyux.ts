import RememberLastLogin from "@/components/lab/01-remember-last-login/RememberLastLogin";
import InputAutofocus from "@/components/lab/02-input-autofocus/InputAutofocus";
import KeydownFocus from "@/components/lab/03-keydown-focus/PressEnterSubmit";
import PressEnterSubmit from "@/components/lab/04-press-enter-submit/PressEnterSubmit";
import AutoFocusNextField from "@/components/lab/05-auto-focus-to-next-field/AutoFocusNextField";
import PasswordRequirementsInline from "@/components/lab/06-password-requirements-inline/PasswordRequirementInline";
import DisableSubmitUntilValid from "@/components/lab/07-disable-submit-until-valid/DisableSubmitUntilValid";

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
    title: "#02 — Input Autofocus",
    description: "Auto-focus the input field when the component mounts",
    Component: InputAutofocus,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/02-input-autofocus",
  },
  {
    id: "03-keydown-focus",
    title: "#03 — Focus on Keypress",
    description: "Focuses input after first keypress to avoid scroll jumps",
    Component: KeydownFocus,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/03-keydown-focus",
  },
  {
    id: "04-press-enter-submit",
    title: "#04 — Press Enter to Submit",
    description: "Let users submit short forms using Enter key",
    Component: PressEnterSubmit,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/04-press-enter-submit",
  },
  {
    id: "05-auto-focus-next-field",
    title: "#05 — Auto-focus to Next Field",
    description:
      "Move focus automatically to the next input when one character is entered",
    Component: AutoFocusNextField,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/05-auto-focus-to-next-field",
  },
  {
    id: "06-password-requirement-inline",
    title: "#06 — Show Password Requirements Inline",
    description:
      "Guide users by showing password strength rules that update live as they type",
    Component: PasswordRequirementsInline,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/06-password-requirements-inline",
  },
  {
    id: "07-disable-submit-until-valid",
    title: "#07 — Disable Submit Until Form is Valid",
    description:
      "Prevent submission until all required fields are valid, reducing errors and frustration",
    Component: DisableSubmitUntilValid,
    codeUrl:
      "https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/07-disable-submit-until-valid",
  },
];
