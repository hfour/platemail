import * as React from 'react';
import { PlatemailContext } from '../PlatemailContext';

export default class PlatemailComponent extends React.Component {
  text: React.ReactElement<any>;
  html: React.ReactElement<any>;

  constructor(props: any, textComponent: string, htmlComponent: React.ReactElement<any>) {
    super(props);
    this.text = textComponent;
    this.html = htmlComponent;
  }

  getTextComponent() {
    return this.text;
  }

  getHtmlComponent() {
    return this.html;
  }

  render() {
    let pmContext = React.useContext(PlatemailContext);
    let component: any;
    if (pmContext.htmlMode) {
      component = this.html;
    } else {
      component = this.text;
    }

    return { component };
  }
}
