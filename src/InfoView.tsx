import * as React from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import { Link } from "./Link";

interface InfoViewProps {
  rsvped: boolean;
  onClickRsvp: () => void;
}

export const InfoView: React.VFC<InfoViewProps> = ({ rsvped, onClickRsvp }) => {
  return (
    <div className="flex flex-col">
      {rsvped && (
        <span className="text-green-700 mt-1">Thanks for RSVPing!</span>
      )}
      <div>
        <Header>What?</Header>
        Our wedding will be on Sunday, July 21 at{" "}
        <Link href="https://kymarestaurants.com">Kyma</Link>, located at 15 West
        18th Street, New York, NY 10011.
        <br />
        Expect a night of ceremony, socializing, food, and board games!
        <br />
        We ask that you arrive at 6 pm in semi-formal dress.
        <br />
        NO GIFTS¡
        <br />
        <br />
        In addition, for those who will be in town, we'll be hosting a private{" "}
        <Link href="https://secretcityny.com/central-park-scavenger-hunt">
          scavenger hunt
        </Link>{" "}
        on Saturday, July 20.
        <br />
        If you won't be in town yet or this just isn't your thing, that's
        absolutely fine! No pressure to attend.
        <br />
        If you are planning to attend, please arrive at the Pulitzer Fountain at
        764 Central Park S, New York, NY 10019 at 4:30 pm.
        <br />
        Dress comfortably! Food to follow!
      </div>
      <div>
        <Header>Where?</Header>
        We have group rates available for the nights of the 20th and 21st at:
        <br />•{" "}
        <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1706712016894&key=GRP&app=resvlink">
          the SpringHill Suites Chelsea
        </Link>
        <br />•{" "}
        <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1706284733030&key=GRP&app=resvlink">
          the Renaissance Chelsea Hotel
        </Link>
        <br />•{" "}
        <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1707740788443&key=GRP&app=resvlink">
          Moxy Chelsea
        </Link>
        <br />
        (Click those links to book using our group rate)
        <br />
        There's a limited number of rooms available but we can add more, so
        reach out to us if the groups have run out of rooms.
      </div>
      <div>
        <Header>Who?</Header>
        You, hopefully! Please RSVP by May 10th by clicking here:
        <br />
        <div className="mt-1" />
        <Button onClick={onClickRsvp}>RSVP</Button>
      </div>
    </div>
  );
};
