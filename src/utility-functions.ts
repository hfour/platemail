import * as React from "react";
import PlatemailContext from "./PlatemailContext";

export function createComponent<T>(
  textComp: (props: T) => React.ReactElement<any>,
  htmlComp: (props: T) => React.ReactElement<any>
): (props: T) => React.ReactElement<any> {
  return (props: T) => {
    let pmContext = React.useContext(PlatemailContext);
    if (pmContext) {
      return htmlComp(props);
    } else {
      return textComp(props);
    }
  };
}
