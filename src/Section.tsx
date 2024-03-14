import * as React from "react";

import { Label } from "./Label";

interface SectionProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

export const Section: React.VFC<SectionProps> = ({ children, label }) => (
  <div className="flex flex-col">
    <Label>{label}</Label>
    {children}
  </div>
);
