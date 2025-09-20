import { defineType, defineField } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: { type: 'brand' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(500)
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility.',
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ],
      validation: (Rule) => Rule.min(1).max(5)
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' }
        }
      ],
      validation: (Rule) => Rule.min(1).max(3)
    }),
    defineField({
      name: 'variants',
      title: 'Product Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'variant',
          title: 'Variant',
          fields: [
            {
              name: 'sku',
              title: 'SKU',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.required().min(0)
            },
            {
              name: 'size',
              title: 'Size',
              type: 'string',
              description: 'e.g., S, M, L, XL or 10mg, 25mg'
            },
            {
              name: 'color',
              title: 'Color',
              type: 'string',
              description: 'e.g., Black, White, Red'
            },
            {
              name: 'inStock',
              title: 'In Stock',
              type: 'boolean',
              initialValue: true
            },
            {
              name: 'inventory',
              title: 'Inventory Count',
              type: 'number',
              description: 'Leave empty for unlimited stock'
            }
          ],
          preview: {
            select: {
              title: 'sku',
              subtitle: 'price',
              size: 'size',
              inStock: 'inStock'
            },
            prepare(selection) {
              const { title, subtitle, size, inStock } = selection
              return {
                title: `${title} - $${subtitle}`,
                subtitle: `${size || 'One Size'} - ${inStock ? 'In Stock' : 'Out of Stock'}`
              }
            }
          }
        }
      ],
      validation: (Rule) => Rule.min(1)
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show this product in featured sections',
      initialValue: false
    }),
    defineField({
      name: 'isLimited',
      title: 'Limited Edition',
      type: 'boolean',
      description: 'Mark as limited edition drop',
      initialValue: false
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160)
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'title',
      brand: 'brand.name',
      media: 'images.0',
      featured: 'featured'
    },
    prepare(selection) {
      const { title, brand, media, featured } = selection
      return {
        title: title,
        subtitle: `${brand}${featured ? ' • Featured' : ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    }
  ]
})

export const brandSchema = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'description',
      title: 'Brand Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url'
    }),
    defineField({
      name: 'featured',
      title: 'Featured Brand',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo'
    }
  }
})

export const categorySchema = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'icon',
      title: 'Category Icon',
      type: 'string',
      description: 'Icon name (e.g., shopping-bag, leaf, etc.)'
    }),
    defineField({
      name: 'color',
      title: 'Category Color',
      type: 'string',
      options: {
        list: [
          { title: 'Fuchsia', value: 'fuchsia' },
          { title: 'Pink', value: 'pink' },
          { title: 'Purple', value: 'purple' },
          { title: 'Emerald', value: 'emerald' },
          { title: 'Blue', value: 'blue' },
          { title: 'Orange', value: 'orange' }
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured Category',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
})
