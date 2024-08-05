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
        <Header>Wedding Ceremony + Reception</Header>
        Sunday, July 21, 2024  |  6:00 PM
        <br />
        <Link href="https://kymarestaurants.com">Kyma Restaurant</Link>  |  <Link href="https://maps.app.goo.gl/yFkPUBM6ZLpSfmqC7"> 15 West 18th Street, New York, NY</Link>
        <br />
        Expect a night of ceremony, socializing, food, and board games!
        <br />
        Semi-formal attire.
        <br />
        We're so grateful to you for celebrating with us.
        Your presence is truly enough; we kindly request no gifts.
        </div>
      <div>
      <Header>Scavenger Hunt</Header>
        Saturday, July 20, 2024  |  4:30 PM
        <br />
        Meeting location: <Link href="https://maps.app.goo.gl/wD47Ckz4tsVVmFM3A">Pulitzer Fountain,
        764 Central Park S, New York, NY</Link>
        <br />
        For those who will be in town, we'll be hosting a private{" "}
        <Link href="https://secretcityny.com/central-park-scavenger-hunt">
          scavenger hunt in Central Park</Link>.
        <br />
        If you won't be in town yet or this just isn't your thing, that's
        absolutely fine! No pressure to attend.
        <br />
        Dress comfortably! Food to follow.
      </div>
      <div>
        <Header>Hotel Options</Header>
        We have group rates available for the nights of July 20 and 21 at:
        <br />•{" "}
        <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1706712016894&key=GRP&app=resvlink">
          SpringHill Suites Chelsea
        </Link>
        <br />•{" "}
        <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1706284733030&key=GRP&app=resvlink">
          Renaissance New York Chelsea Hotel
        </Link>
        <br />•{" "}
        <Link href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1707740788443&key=GRP&app=resvlink">
          Moxy NYC Chelsea
        </Link>
        <br />
        Click those links to book your room using our group rate by June 15.
        <br />
        There's a limited number of rooms available but we can add more, so
        reach out to us if the groups have run out of rooms.
      </div>
      <div>
        <Header>RSVP</Header>
        We hope that you can join us! Please RSVP by May 10 by clicking here:
        <br />
        <div className="mt-1" />
        <Button onClick={onClickRsvp}>RSVP</Button>
      </div>
      <div>
        <Header>Questions?</Header>
        Reach out to Arley at (412) 576-7729 or Alex at (631) 278-1242.
      </div>
    </div>
  );
};
