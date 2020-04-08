import { createComponent } from "../utility-functions";
import * as React from "react";

function textComp(props?: any): React.ReactElement<any> {
  return (
    <>
      {props && props.subject}
      {"\n\n"}
      {props && props.children}
    </>
  );
}

function htmlComp(props?: any): React.ReactElement<any> {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,600i,700,700i"
          rel="stylesheet"
        />
        <style type="text/css">{}</style>
      </head>
      <body>
        <table>
          <tr>
            <td>
              {props && props.subject}
              {props && props.children}
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

export let Email = (props?: any) =>
  createComponent(textComp(props), htmlComp(props));
