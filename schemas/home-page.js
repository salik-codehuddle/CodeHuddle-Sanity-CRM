export default {
  name: "home-page",
  type: "document",
  title: "Home Page",
  fields: [
    {
      name: "headline",
      type: "text",
      title: "Headline",
    },
    {
      name: "services",
      type: "array",
      title: "Services",
      of: [
        {
          name: "service",
          title: "Service",
          type: "object",
          fields: [
            {
              name: "icon",
              type: "image",
              title: "Icon",
            },
            {
              name: "name",
              type: "string",
              title: "Name",
            },
            {
              name: "detail",
              type: "text",
              title: "Details",
            },
          ],
        },
      ],
    },
    {
      name: "about",
      type: "object",
      title: "About",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "body",
          type: "array",
          title: "Body (Statement/Paragaphs)",
          of: [{ type: "text" }],
        },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [{ type: "string" }],
        },
        {
          name: "image",
          type: "image",
          title: "Image",
        },
      ],
    },
    {
      name: "process",
      title: "Process",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "processes",
          type: "array",
          title: "Processes",
          of: [
            {
              name: "details",
              title: "Process Details",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "body",
                  title: "Body",
                  type: "text",
                },
                {
                  name: "color",
                  title: "Color Number",
                  type: "string",
                },
                {
                  name: "number",
                  title: "Serial Number",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          name: "details",
          title: "Testimonial Details",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
            },
            {
              name: "statement",
              title: "Statement",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "contacts",
      title: "Contacts",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "fromSubtitle",
          title: "Form Subtitles",
          type: "string",
        },
      ],
    },
    {
      name: "clients",
      title: "Clients",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
