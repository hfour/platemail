import { createComponent } from "../utility-functions";
import * as React from "react";

function textComp(props: any): React.ReactElement<any> {
  return (
    <>
      {props && props.children}
      {"\n\n"}
    </>
  );
}

function htmlComp(props: any): React.ReactElement<any> {
  return (
    <p
      style={{
        fontSize: 20
      }}
      {...props}
    >
      {props.children}
    </p>
  );
}

export let Paragraph = (props: any) =>
  createComponent(textComp(props), htmlComp(props));
