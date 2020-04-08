import * as React from "react";
import PlatemailContext from "./PlatemailContext";

export function createComponent(
  textComp: React.ReactElement<any>,
  htmlComp: React.ReactElement<any>
): React.ReactElement<any> {
  let pmContext = React.useContext(PlatemailContext);
  if (pmContext) {
    return htmlComp;
  } else {
    return textComp;
  }
}
