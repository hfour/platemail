export type RenderedEmailObject = {
  subject: string;
  body: {
    html: string;
    text: string;
  };
};

export type PlatemailObjectBody = {
  html: string;
  text: string;
};
//TODO: Input types for various objects
