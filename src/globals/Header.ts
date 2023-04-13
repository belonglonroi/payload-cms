import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  label: "Header",
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      if (user) return true;
    },
  },
  fields: [
    { name: "logo", type: "upload", relationTo: "images", required: true },
    { name: "phone", type: "text" },
    { name: "email", type: "text" },
    {
      name: "navigation",
      type: "array",
      maxRows: 10,
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
        {
          name: "child",
          type: "array",
          fields: [
            { name: "thumbnail", type: "upload", relationTo: "images" },
            { name: "group", type: "text" },
            { name: "label", type: "text" },
            { name: "href", type: "text" },
            {
              name: "child",
              type: "array",
              fields: [
                { name: "label", type: "text" },
                { name: "href", type: "text" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Header;
