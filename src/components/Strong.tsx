import { createComponent } from "../utility-functions";
import * as React from "react";

function textComp(props: any): React.ReactElement<any> {
  return (
    <>**{props && props.children}**</>
  );
}

function htmlComp(props: any): React.ReactElement<any> {
  return (
    <strong>
      {props && props.children}
    </strong>
  );
}

export let Strong = createComponent(textComp, htmlComp);
