import { createComponent } from "../utility-functions";
import * as React from "react";

function textComp(props: any): React.ReactElement<any> {
  return (
    <>**{props && props.children}**</>
  );
}

function htmlComp(props: any): React.ReactElement<any> {
  return (
    <u>
      {props && props.children}
    </u>
  );
}

export let Underline = createComponent(textComp, htmlComp);
