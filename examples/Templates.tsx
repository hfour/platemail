import * as React from "react";
import { Email } from "../src/components/Email";
import { Paragraph } from "../src/components/Paragraph";

export let simpleEmailTemplate = (email: { subject: string }) => {
  return (
    <Email subject={email.subject}>
      <Paragraph>This is a simple template.</Paragraph>
    </Email>
  );
};
