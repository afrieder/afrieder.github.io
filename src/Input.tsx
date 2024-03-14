import * as React from "react";

export const Input: React.VFC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <input
    {...props}
    className={`${props.className} bg-inherit border rounded border-slate-500 text-slate-600 pl-2`}
  />
);
