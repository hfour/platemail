import { createComponent } from "../utility-functions";
import * as React from "react";

function textComp(props: any): React.ReactElement<any> {
  return <>*{props && props.children}*</>;
}

function htmlComp(props: any): React.ReactElement<any> {
  return <em>{props && props.children}</em>;
}

export let Emphasis = createComponent(textComp, htmlComp);
