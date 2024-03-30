import * as React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.VFC<HeaderProps> = ({ children }) => (
  <h1 className="text-xl font-bold mt-3">{children}</h1>
);
