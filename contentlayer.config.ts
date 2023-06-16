import { DocumentGen } from "contentlayer/core";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { stringify } from "querystring";
import remarkMdxImages from "remark-mdx-images";

export const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, "");
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    image: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMdxImages],
    esbuildOptions: (option) => {
      option.loader = {
        ...option.loader,
        ".jpg": "dataurl",
        ".png": "dataurl",
      };
      return option;
    },
  },
});
