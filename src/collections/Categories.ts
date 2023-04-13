import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    read: () => true,
  },
  labels: { singular: "Danh mục sản phẩm", plural: "Danh mục sản phẩm" },
  fields: [
    {
      name: "category_name",
      label: "Tên danh mục",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Mô tả",
      type: "textarea",
    },
  ],
};

export default Categories;
