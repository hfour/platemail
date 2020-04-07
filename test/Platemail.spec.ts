import Platemail from '../src/Platemail';
import { simpleEmailTemplate } from '../examples/Templates';

describe('emails', () => {
  it('should match the existing snapshot', () => {
    const pm = new Platemail();
    let emailProps = { subject: 'Simple Email Template' };

    let renderedEmailObject = pm.render(simpleEmailTemplate, emailProps);

    console.log(renderedEmailObject.subject);

    return expect(renderedEmailObject).toMatchSnapshot();
  });
});
