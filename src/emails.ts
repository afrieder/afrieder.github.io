const OLD_API_KEY = "bqj;g35gf8f86c1:1ecbd8d8ccfb8:cf5:ce.c13cdg:g.3556516e";
const NEW_API_KEY = OLD_API_KEY.split("").map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join("")
const DOMAIN = "sandbox12a40535aa9a441aa75e3a5f9974d777.mailgun.org";

export interface EmailInfo {
  name: string;
  attending: boolean;
  attendingInfo: {
    mainEventCount: string;
    sideEventCount: string;
    foodRestrictions: string;
    hotelInfo: string | null;
  }
  anythingElse: string;
}

export const sendEmail = (emailInfo: EmailInfo) => {
  const body = new FormData();

  body.append("from", "Wedding RSVP <postmaster@YOUR_DOMAIN_NAME>");
  body.append("to", "alex.frieder@gmail.com");
  body.append("to", "akschenker@gmail.com");
  body.append("subject", "Wedding RSVP");

  const text = `
    ${emailInfo.name} filled out the form. They ${emailInfo.attending ? 'WILL' : 'WILL NOT'} be attending

    ${emailInfo.attending ? `
      Attending the main event: ${emailInfo.attendingInfo.mainEventCount}

      Attending the side event: ${emailInfo.attendingInfo.sideEventCount}

      Food restrictions: ${emailInfo.attendingInfo.foodRestrictions}

      ${emailInfo.attendingInfo.hotelInfo ? `Hotel info: ${emailInfo.attendingInfo.hotelInfo}` : ''}
    ` : ''}

    ${emailInfo.anythingElse ? `Other comments: ${emailInfo.anythingElse}` : ''}
  `;

  body.append("text", text);

  return fetch(`https://api.mailgun.net/v3/${DOMAIN}/messages`, {
    method: "POST",
    headers: { Authorization: `Basic ${btoa(NEW_API_KEY)}` },
    body,
  });
};