import { CollectionConfig } from "payload";
import { HTMLConverterFeature, HeadingFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const Policies: CollectionConfig = {
    slug: "policies",
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: "title",
                    label: "Title",
                    type: "text",
                    required: true,
                },
                {
                    name: "slug",
                    label: "Slug",
                    type: "text",
                    required: true,
                }
            ]
        },
        {
            name: "content",
            label: "Content",
            type: "richText",
            required: true,
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures, 
                  HeadingFeature({
                    enabledHeadingSizes: ['h2', 'h3', 'h4'],
                  }),
                  HTMLConverterFeature({})],
              }),
            },
            lexicalHTML('content', { name: 'content_html' }),
    ]
}