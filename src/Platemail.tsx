import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import PlatemailContext from './PlatemailContext';
import { RenderedEmailObject } from './types';

export default class Platemail {
  doctype: string = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`;

  //TODO: Constructor - uses context, custom and existing components

  render(EmailTemplate: React.FunctionComponent<any>, props?: any): RenderedEmailObject {
    let html = (
      <PlatemailContext.Provider value={true}>
        <EmailTemplate {...props} />
      </PlatemailContext.Provider>
    );

    let text = (
      <PlatemailContext.Provider value={false}>
        <EmailTemplate {...props} />
      </PlatemailContext.Provider>
    );
    
    return { subject: html.props.children.props.subject, body: this.renderedBody(html, text) };
  }

  renderedBody(html: any, text: any) {
    return {
      html: [this.doctype, ReactDOM.renderToStaticMarkup(html as any)].join('\n'),
      text: ReactDOM.renderToStaticMarkup(text as any),
    };
  }

}
