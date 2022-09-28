/* eslint-disable no-sparse-arrays */
export const bodyText = {
  title: "bodyText",
  name: "bodyText",
  type: "object",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "body", type: "array", title: "Body", of: [{ type: "text" }] },
  ],
};

export default {
  name: "case-studies",
  type: "document",
  title: "Case Studies",
  fields: [
    {
      name: "id",
      type: "string",
      title: "Id",
    },
    {
      name: "bgColor",
      type: "string",
      title: "Background Color",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "projectName",
      type: "string",
      title: "Project Name",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "bgImage",
      type: "image",
      title: "Background Image",
    },
    {
      name: "cardImage",
      type: "image",
      title: "Card Background Image",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      name: "homeImage",
      type: "image",
      title: "Home Background Image",
    },
    {
      name: "mockups",
      type: "array",
      title: "Mockups",
      of: [{ type: "image" }],
    },
    {
      name: "deliverables",
      type: "array",
      title: "Deliverables",
      of: [{ type: "string" }],
      options: {
        layout: [, "web app", "android app", "ios app", "cloud services"],
      },
    },
    {
      name: "overview",
      type: "text",
      title: "Overview",
    },
    {
      name: "problem",
      type: "object",
      title: "Problem",
      // to: [{ type: "bodyText" }],
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "body",
          type: "array",
          title: "Body (Add Paragraphs)",
          of: [{ type: "text" }],
        },
      ],
    },
    {
      name: "challange",
      type: "text",
      title: "Challange",
    },
    {
      name: "solution",
      type: "object",
      title: "Solution",
      // to: [{ type: "bodyText" }],
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "body",
          type: "array",
          title: "Body (Add Paragraphs)",
          of: [{ type: "text" }],
        },
      ],
    },
    {
      name: "process",
      type: "object",
      title: "Process",
      // to: [{ type: "bodyText" }],
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "body",
          type: "array",
          title: "Body (Add Paragraphs)",
          of: [{ type: "text" }],
        },
      ],
    },
    {
      name: "impact",
      type: "object",
      title: "Impact",
      // to: [{ type: "bodyText" }],
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "body",
          type: "array",
          title: "Body (Add Paragraphs)",
          of: [{ type: "text" }],
        },
      ],
    },
  ],
};
