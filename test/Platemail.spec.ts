import Platemail from "../src/Platemail";
import {
  simpleEmailTemplate,
  customEmailTemplate
} from "../examples/Templates";
import { AllComponentsEmail } from "./templates/templates";

describe("platemail", () => {
  describe("match existing snapshots", () => {
    const pm = new Platemail();

    it("simple email template", () => {
      let emailProps = { subject: "Simple Email Template" };
      let renderedEmailObject = pm.render(simpleEmailTemplate, emailProps);
      return expect(renderedEmailObject).toMatchSnapshot();
    });

    it("all components", () => {
      let emailProps = { subject: "Email with all Platemail components" };
      let renderedEmailObject = pm.render(AllComponentsEmail, emailProps);
      return expect(renderedEmailObject).toMatchSnapshot();
    });

    it("allows custom components", () => {
      let customEmailProps = {
        subject: "Custom Email Template",
        user: { name: "Spike" }
      };
      let customEmailObject = pm.render(customEmailTemplate, customEmailProps);
      return expect(customEmailObject).toMatchSnapshot();
    });
  });
});
