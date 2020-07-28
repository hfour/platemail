import * as React from "react";
import { Email } from "../../src/components/Email";
import { Paragraph } from "../../src/components/Paragraph";
import { Bold } from "../../src/components/Bold";
import { Emphasis } from "../../src/components/Emphasis";
import { Italic } from "../../src/components/Italic";
import { Strong } from "../../src/components/Strong";
import { Underline } from "../../src/components/Underline";

export let AllComponentsEmail = (email: { subject: string }) => {
  return (
    <Email subject={email.subject}>
      <Paragraph>
        <Bold>This</Bold> <Emphasis>is</Emphasis> <Italic>a</Italic>{" "}
        <Strong>simple</Strong> <Underline>template.</Underline>
      </Paragraph>
    </Email>
  );
};
