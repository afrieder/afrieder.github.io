import * as React from "react";

import type { Page } from "./page";
import { PASSWORD_1, PASSWORD_2, hashString } from "./passwords";
import { Button } from "./Button";
import { Input } from "./Input";

interface PasswordViewProps {
  setPage: (page: Page) => void;
}

export const PasswordView: React.VFC<PasswordViewProps> = ({ setPage }) => {
  const [password, setPassword] = React.useState("");

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value);
    },
    []
  );

  const checkPassword = React.useCallback(async () => {
    const hashedPassword = await hashString(password);

    if (hashedPassword === PASSWORD_1) {
      setPage("password_1");
    } else if (hashedPassword === PASSWORD_2) {
      setPage("password_2");
    } else {
      window.alert("Incorrect password");
    }
  }, [password]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        checkPassword();
      }
    },
    [checkPassword]
  );

  return (
    <>
      <div>
        <span>Please enter the password found on your invitation.</span>
      </div>
      <div className="my-2">
        <Input
          className="w-full"
          placeholder="Enter password"
          autoFocus
          value={password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex">
        <Button onClick={checkPassword}>Join the festivities!</Button>
      </div>
    </>
  );
};
