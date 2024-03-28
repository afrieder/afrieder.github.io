import * as React from "react";

import { sendEmail, EmailInfo } from "./emails";
import { Button } from "./Button";
import { Input } from "./Input";
import { Section } from "./Section";

interface RsvpFormProps {
  isPassword2: boolean;
  onSubmitRsvp: () => void;
}

export const RsvpForm: React.VFC<RsvpFormProps> = ({
  isPassword2,
  onSubmitRsvp,
}) => {
  const [name, setName] = React.useState("");
  const [attending, setAttending] = React.useState<boolean | null>(null);
  const [clickedAttending, setClickedAttending] = React.useState(false);
  const [anythingElse, setAnythingElse] = React.useState("");
  const [attendingInfo, setAttendingInfo] = React.useState<
    EmailInfo["attendingInfo"]
  >({
    mainEventCount: "",
    sideEventCount: "",
    foodRestrictions: "",
    hotelInfo: isPassword2 ? "" : null,
  });
  const [oops, setOops] = React.useState(false);

  const disabledMessage = React.useMemo(() => {
    if (name.length < 3) {
      return "Let us know who you are!";
    } else if (attending === null) {
      return "Let us know if you're coming!";
    } else if (attending && !attendingInfo.mainEventCount) {
      return "Tell us who's attending!";
    } else if (attending && !attendingInfo.sideEventCount) {
      return "Tell us who's attending the scavenger hunt!";
    } else if (isPassword2 && attending && !attendingInfo.hotelInfo) {
      return "What about the hotel situation?";
    } else {
      return null;
    }
  }, [name, attending, attendingInfo]);

  const updateAttendingInfo = React.useCallback(
    <T extends keyof EmailInfo["attendingInfo"]>(
      key: T,
      value: EmailInfo["attendingInfo"][T]
    ) => {
      setAttendingInfo((attendingInfo) => ({ ...attendingInfo, [key]: value }));
    },
    []
  );

  const handleAnythingElseChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAnythingElse(event.currentTarget.value);
    },
    []
  );

  const handleNameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.currentTarget.value);
    },
    []
  );

  const handleClickAttending = React.useCallback(() => {
    setAttending(true);
    setClickedAttending(true);
  }, []);

  const handleClickNotAttending = React.useCallback(() => {
    setAttending(false);
  }, []);

  const handleChangeMainEventCount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateAttendingInfo("mainEventCount", event.currentTarget.value);
    },
    [updateAttendingInfo]
  );

  const handleChangeSideEventCount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateAttendingInfo("sideEventCount", event.currentTarget.value);
    },
    [updateAttendingInfo]
  );

  const handleChangeFoodRestrictions = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateAttendingInfo("foodRestrictions", event.currentTarget.value);
    },
    [updateAttendingInfo]
  );

  const handleChangeHotelInfo = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateAttendingInfo("hotelInfo", event.currentTarget.value);
    },
    [updateAttendingInfo]
  );

  const submitRsvp = React.useCallback(async () => {
    if (attending === null) {
      return;
    }

    const emailInfo = { name, attending, attendingInfo, anythingElse };

    try {
      const { ok } = await sendEmail(emailInfo);
      if (!ok) {
        throw new Error();
      }

      onSubmitRsvp();
    } catch {
      setOops(true);
    }
  }, [name, attending, attendingInfo, anythingElse, onSubmitRsvp]);

  const animationClassName = React.useMemo(() => {
    if (attending) {
      return isPassword2 ? "animate-fade-in-tall" : "animate-fade-in";
    } else {
      return isPassword2 ? "animate-fade-out-tall" : "animate-fade-out";
    }
  }, [attending, isPassword2]);

  return (
    <div>
      {oops && (
        <span className="mt-1 text-red-500">
          Oops! Something went wrong! Sorry about that. Try again or just reach
          out to us another way
        </span>
      )}
      <Section label="Who are you?">
        <Input value={name} onChange={handleNameChange} />
      </Section>
      <Section
        label={`Are you attending? ${
          attending === true ? "😄" : attending === false ? "😕" : "👀"
        }`}
      >
        <div className="flex justify-evenly">
          <div className="flex gap-2 items-center">
            <label htmlFor="attending-yes" className="font-light">
              Yes!
            </label>
            <Input
              id="attending-yes"
              checked={attending === true}
              onChange={handleClickAttending}
              type="radio"
            />
          </div>
          <div className="flex gap-1 items-center">
            <label htmlFor="attending-no" className="font-light">
              No
            </label>
            <Input
              id="attending-no"
              checked={attending === false}
              onChange={handleClickNotAttending}
              type="radio"
            />
          </div>
        </div>
      </Section>
      {(attending || clickedAttending) && (
        <div className={animationClassName}>
          <Section label="Number of guests attending the wedding on Sunday, July 21">
            <Input
              value={attendingInfo.mainEventCount}
              onChange={handleChangeMainEventCount}
            />
          </Section>
          <Section label="Number of guests attending the scavenger hunt on Saturday, July 20">
            <Input
              value={attendingInfo.sideEventCount}
              onChange={handleChangeSideEventCount}
            />
          </Section>
          <Section label="Do you have any dietary restrictions?">
            <Input
              value={attendingInfo.foodRestrictions}
              onChange={handleChangeFoodRestrictions}
            />
          </Section>
          {isPassword2 && (
            <Section
              label={
                <>
                  How many/what kind of hotel rooms are we booking for you?
                  <br />
                  And for which nights?
                </>
              }
            >
              <Input
                value={attendingInfo.hotelInfo ?? ""}
                onChange={handleChangeHotelInfo}
              />
            </Section>
          )}
        </div>
      )}
      <Section label="Anything else you'd like us to know?">
        <Input value={anythingElse} onChange={handleAnythingElseChange} />
      </Section>
      <div className="mt-2 flex">
        <Button disabled={!!disabledMessage} onClick={submitRsvp}>
          <div
            title={disabledMessage ?? "Submit RSVP"}
            className={`before:content-['Submit_RSVP'] hover:before:content-[attr(title)]`}
          />
        </Button>
      </div>
    </div>
  );
};
