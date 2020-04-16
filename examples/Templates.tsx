import * as React from "react";
import { Email } from "../src/components/Email";
import { Paragraph } from "../src/components/Paragraph";
import { createComponent } from "../src/utility-functions";

export let simpleEmailTemplate = (email: { subject: string }) => {
  return (
    <Email subject={email.subject}>
      <Paragraph>This is a simple template.</Paragraph>
    </Email>
  );
};

// Custom Component and Template

function customHtmlComponent(props: any): React.ReactElement<any> {
  return <Paragraph>Welcome {props.user}!</Paragraph>;
}

function customTextComponent(props: any): React.ReactElement<any> {
  return (
    <>
      Welcome {props.user}!{"\n\n"}
    </>
  );
}

let WelcomeMessage = createComponent(customTextComponent, customHtmlComponent);

export let customEmailTemplate = (email: {
  subject: string;
  user: { name: string };
}) => {
  return (
    <Email subject={email.subject}>
      <WelcomeMessage user={email.user.name} />
    </Email>
  );
};
