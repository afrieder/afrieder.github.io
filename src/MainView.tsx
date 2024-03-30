import * as React from "react";

import { RsvpForm } from "./RsvpForm";
import { InfoView } from "./InfoView";

interface MainViewProps {
  isPassword2: boolean;
}

export const MainView: React.VFC<MainViewProps> = ({ isPassword2 }) => {
  const [showingRsvp, setShowingRsvp] = React.useState(false);
  const [rsvped, setRsvped] = React.useState(false);

  const handleSubmitRsvp = React.useCallback(() => {
    setRsvped(true);
    setShowingRsvp(false);
  }, []);

  const handleClickRsvp = React.useCallback(() => {
    setShowingRsvp(true);
  }, []);

  return (
    <div>
      <h2 className="text-xl">🎉 We're so excited to celebrate with you! 🎉</h2>
      {showingRsvp ? (
        <RsvpForm isPassword2={isPassword2} onSubmitRsvp={handleSubmitRsvp} />
      ) : (
        <InfoView rsvped={rsvped} onClickRsvp={handleClickRsvp} />
      )}
    </div>
  );
};
