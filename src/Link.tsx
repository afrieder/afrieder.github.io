import * as React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link: React.VFC<LinkProps> = ({ href, children }) => (
  <a className="underline text-blue-700" href={href}>
    {children}
  </a>
);
