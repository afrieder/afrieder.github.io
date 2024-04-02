import * as React from "react";

import { PasswordView } from "./PasswordView";
import { MainView } from "./MainView";

type Page = "get_password" | "password_1" | "password_2";

// SERIOUSLY? You're looking at the source code of my wedding website?
// Do you have that much time on your hands?
// Anyway, hi! Send me a message letting me know that you saw this.

export const App: React.VFC = () => {
  const [page, setPage] = React.useState<Page>("get_password");

  return (
    <div className="h-full w-full bg-slate-200 flex flex-col font-sans p-5 justify-between leading-relaxed">
      <div className="self-center mt-5">
        <h1
          className="text-6xl font-light min-h-20"
          style={{ fontFamily: "cursive" }}
        >
          Alex & Arley's Wedding
        </h1>
      </div>
      <div className="border rounded border-slate-500 bg-slate-100 p-4 h-fit self-center w-fit">
        {page === "get_password" ? (
          <PasswordView setPage={setPage} />
        ) : (
          <MainView isPassword2={page === "password_2"} />
        )}
      </div>
      <div />
    </div>
  );
};
