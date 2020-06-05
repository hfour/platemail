import { createComponent } from "../utility-functions";
import * as React from "react";

function textComp(props: any): React.ReactElement<any> {
  return (
    <>**{props && props.children}**</>
  );
}

function htmlComp(props: any): React.ReactElement<any> {
  return (
    <b>
      {props && props.children}
    </b>
  );
}

export let Bold = createComponent(textComp, htmlComp);
