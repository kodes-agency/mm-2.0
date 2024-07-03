import type { Field, FieldHook } from "payload";
// import formatSlug from "../utilities/formatSlug";
export const slugField: Field = {
  name: "slug",
  label: "Slug",
  type: "text",
  index: true,
  hooks: {
    beforeValidate: [({data, value, operation}): FieldHook => {
      if(operation === 'create') {
          // @ts-expect-error
          return value = data.title
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            .toLowerCase()
      } else {
          return value
      }
    }],
  },
};
