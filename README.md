# Platemail

Simple, flexible email rendering for React!

Features:

- Create your own email template using pre-built components
- Email is rendered in both HTML and Text format. Giving full control over text rendering

Future Features:

- Pre-built templates and styling - with the ability to customise
- Simple customisation through controlling/providing top level styles
- Defining/Creating custom components with custom styling & props
- Complete Validation - compatibility check with email clients to ensure the email will render as intended

## Install

NOTE: Once the library has met a certain functional threshold it will then be published and available for use

`yarn add platemail`

## Example Usage

Examples can be found in the `examples/` directory. These examples are used in testing.

```typescript
import Platemail from "platemail";
import { Paragraph, Email } from "platemail";

let MyWelcomeEmail = (user: { name: string }) => (
  <Email>
    Hi {user.name} and welcome to our website! Hope you have a great time!
  </Email>
);

let renderer = new Platemail();

let result = renderer.render(MyWelcomeEmail, { name: "Jane" });

// result.body.html contains the html version whereas result.body.text
```

## Future/Vision ReadMe

NOTE: The following documentation helps show the vision for the direction of platemail. The following examples and usage are yet to be developed.

You can also define your own components with their own configuration and params!

```typescript

renderer.setBaseTemplate(platemail.BaseLogoTemplate)
renderer.configure(platemail.BaseLogoTemplate, {
  logoUrl: 'url'
  styles: {
    "backgroundColor": "#fff"
  }
})

type UserConfig = {
  color: string;
  fontWeight: string;
}

type MyParams = {
  user: {name: string}
}
let MyUser = platemail.component<MyConfig, MyParams>({
  text: (user) => `**#{user.name}**`
  html: (user) => {
    let config = platemail.useConfig(MyUser);
    return <span style={{color: config.color, fontWeight: config.fontWeight}}>{user.name}</span>
  }
}
renderer.registerComponent(MyUser);
```

Then you can configure and use it!

```typescript
let MyWelcomeEmail = (user: { name: string }) => (
  <platemail.Email>
    Hi <MyUser user={user} /> and welcome to our website! Hope you have a great
    time!
  </platemail.Email>
);
```

Don't forget to configure your components before rendering!

```typescript
renderer.configure(MyUser, {
  color: "#555"
  fontWeight: bold;
})
```

For styling purposes, its best to configure the base style configuration that everyone uses:

```typescript
renderer.configure(platemail.Styles, {
  'body': { backgroundColor: "#fff"; fontFamily: 'Verdana' }
  'myClass': {values here }
});
```

Then you can fetch the style from the component:

```typescript
let comp = () => {
  let myClass = platemail.useStyle("myClass");
  return <p style={myClass}>content here</p>;
};
```
