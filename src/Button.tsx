import * as React from "react";

export const Button: React.VFC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => (
  <button
    className="ml-auto rounded bg-blue-600 text-white self-end py-1 px-2"
    {...props}
  />
);
