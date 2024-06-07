import { Children } from "react";

interface Props {
  children: string;
  color?:
    | `primary`
    | `secondary`
    | `success`
    | `danger`
    | `warning`
    | `info`
    | `light`
    | `dark`
    | `link`;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      className={"btn btn-" + color + " d-grid gap-2 col-6 mx-auto"}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
