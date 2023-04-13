import { CollectionConfig } from "payload/types";
// import payload from "payload";
// import { CollectionAfterChangeHook } from "payload/types";

// const afterChangeHook: CollectionAfterChangeHook = async () => {
//   const posts = await payload.find({
//     collection: "posts",
//   });
// };

const Products: CollectionConfig = {
  slug: "products",
  access: { read: () => true },
  labels: { singular: "Sản phẩm", plural: "Sản phẩm" },
  fields: [
    {
      name: "product_name",
      label: "Tên sản phẩm",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Mô tả",
      type: "textarea",
      required: true,
    },
    {
      name: "price",
      label: "Giá",
      type: "number",
      required: true,
    },
    {
      name: "images",
      label: "Hình ảnh",
      type: "array",
      minRows: 1,
      fields: [
        { name: "product_images", type: "upload", relationTo: "images" },
      ],
      required: true,
    },
    {
      name: "category",
      label: "Danh mục",
      type: "select",
      options: [
        { label: "Giày", value: "shoes" },
        { label: "Quần áo", value: "clothes" },
      ],
      required: true,
    },
    {
      name: "brand",
      label: "Thương hiệu",
      type: "select",
      options: [
        { label: "Nike", value: "nike" },
        { label: "Adidas", value: "adidas" },
      ],
    },
    {
      name: "tag",
      label: "Nhãn",
      type: "select",
      hasMany: true,
      options: [
        { label: "Tag 1", value: "tag1" },
        { label: "Tag 2", value: "tag2" },
      ],
    },
    {
      name: "rating",
      label: "Đánh giá",
      type: "number",
      hidden: true,
    },
  ],
};

export default Products;
