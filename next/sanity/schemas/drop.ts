import { defineType, defineField } from 'sanity'

export const dropSchema = defineType({
  name: 'drop',
  title: 'Limited Drop',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Drop Title',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300)
    }),
    defineField({
      name: 'startAt',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'endAt',
      title: 'End Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mode',
      title: 'Drop Mode',
      type: 'string',
      options: {
        list: [
          { title: 'First Come First Served', value: 'first-come' },
          { title: 'Raffle', value: 'raffle' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
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
    }),
    defineField({
      name: 'products',
      title: 'Drop Products',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'dropProduct',
          title: 'Drop Product',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: { type: 'product' },
              validation: (Rule) => Rule.required()
            },
            {
              name: 'variantSku',
              title: 'Variant SKU',
              type: 'string',
              description: 'Specific variant SKU for this drop',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'price',
              title: 'Drop Price',
              type: 'number',
              description: 'Special price for this drop (overrides product price)',
              validation: (Rule) => Rule.required().min(0)
            },
            {
              name: 'cap',
              title: 'Quantity Cap',
              type: 'number',
              description: 'Maximum quantity available in this drop',
              validation: (Rule) => Rule.required().min(1)
            },
            {
              name: 'sold',
              title: 'Quantity Sold',
              type: 'number',
              description: 'Quantity already sold (auto-updated)',
              initialValue: 0,
              validation: (Rule) => Rule.min(0)
            },
            {
              name: 'maxPerPerson',
              title: 'Max Per Person',
              type: 'number',
              description: 'Maximum quantity one person can purchase',
              initialValue: 1,
              validation: (Rule) => Rule.min(1)
            }
          ],
          preview: {
            select: {
              title: 'product.title',
              subtitle: 'variantSku',
              price: 'price',
              cap: 'cap',
              sold: 'sold'
            },
            prepare(selection) {
              const { title, subtitle, price, cap, sold } = selection
              return {
                title: `${title} - $${price}`,
                subtitle: `${subtitle} • ${sold}/${cap} sold`
              }
            }
          }
        }
      ],
      validation: (Rule) => Rule.min(1).max(10)
    }),
    defineField({
      name: 'markets',
      title: 'Available Markets',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'market' }
        }
      ],
      description: 'Markets where this drop is available'
    }),
    defineField({
      name: 'featured',
      title: 'Featured Drop',
      type: 'boolean',
      description: 'Show this drop prominently on the drops page',
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
      startAt: 'startAt',
      endAt: 'endAt',
      featured: 'featured',
      media: 'heroImage'
    },
    prepare(selection) {
      const { title, startAt, endAt, featured } = selection
      const now = new Date()
      const start = new Date(startAt)
      const end = new Date(endAt)
      
      let status = 'upcoming'
      if (now >= start && now < end) {
        status = 'live'
      } else if (now >= end) {
        status = 'ended'
      }
      
      return {
        title: title,
        subtitle: `${status.toUpperCase()}${featured ? ' • Featured' : ''} • ${start.toLocaleDateString()}`,
        media: selection.media
      }
    }
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'startAt', direction: 'asc' }
      ]
    },
    {
      title: 'Start Date',
      name: 'startAtAsc',
      by: [
        { field: 'startAt', direction: 'asc' }
      ]
    },
    {
      title: 'End Date',
      name: 'endAtDesc',
      by: [
        { field: 'endAt', direction: 'desc' }
      ]
    }
  ]
})

export const marketSchema = defineType({
  name: 'market',
  title: 'Market',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Market Name',
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
      name: 'state',
      title: 'State/Province',
      type: 'string'
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'US'
    }),
    defineField({
      name: 'active',
      title: 'Active Market',
      type: 'boolean',
      description: 'Whether this market is currently active',
      initialValue: true
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'state'
    }
  }
})
