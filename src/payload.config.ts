import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Header from "./globals/Header";
import ImageUpload from "./collections/ImageUpload";
import Products from "./collections/Products";
import Categories from "./collections/Categories";

export default buildConfig({
  // serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [Users, ImageUpload, Products, Categories],
  globals: [Header],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
