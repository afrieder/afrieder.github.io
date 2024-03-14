import * as React from "react";

export const Label: React.VFC<React.LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => <label className="mb-1 mt-4" {...props} />;
