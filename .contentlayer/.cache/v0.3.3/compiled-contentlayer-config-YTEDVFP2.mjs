// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkMdxImages from "remark-mdx-images";
var urlFromFilePath = (doc) => {
  return doc._raw.flattenedPath.replace(/pages\/?/, "");
};
var Post = defineDocumentType(() => ({
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
      required: false
    },
    image: { type: "string", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMdxImages],
    esbuildOptions: (option) => {
      option.loader = {
        ...option.loader,
        ".jpg": "dataurl",
        ".png": "dataurl"
      };
      return option;
    }
  }
});
export {
  Post,
  contentlayer_config_default as default,
  urlFromFilePath
};
//# sourceMappingURL=compiled-contentlayer-config-YTEDVFP2.mjs.map
