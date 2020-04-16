import Platemail from "../src/Platemail";
import {
  simpleEmailTemplate,
  customEmailTemplate
} from "../examples/Templates";

describe("emails", () => {
  it("should match the existing snapshot", () => {
    const pm = new Platemail();
    let emailProps = { subject: "Simple Email Template" };
    let renderedEmailObject = pm.render(simpleEmailTemplate, emailProps);
    return expect(renderedEmailObject).toMatchSnapshot();
  });

  it("should allow custom components", () => {
    const pm = new Platemail();
    let customEmailProps = {
      subject: "Custom Email Template",
      user: { name: "Spike" }
    };
    let customEmailObject = pm.render(customEmailTemplate, customEmailProps);
    return expect(customEmailObject).toMatchSnapshot();
  });
});
