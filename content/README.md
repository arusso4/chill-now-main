# Blog Content Management

This directory contains all blog posts for the chillNOW website. The blog system automatically reads markdown files from the `posts/` directory and displays them on the website.

## File Structure

```
content/
├── posts/                    # Blog post markdown files
│   ├── blog-post-template.md # Template for new posts
│   ├── the-art-of-elevated-living.md
│   ├── breaking-the-rules.md
│   └── 60-minute-delivery-revolution.md
└── README.md                 # This file
```

## Creating New Blog Posts

### 1. Use the Template
Copy `posts/blog-post-template.md` and rename it to your desired slug.

### 2. Edit the Frontmatter
Update the metadata at the top of your markdown file:

```yaml
---
title: "Your Blog Post Title"
excerpt: "A compelling one-sentence summary"
author: "Your Name"
date: "2024-01-15"
readTime: "5 min read"
category: "High Performance"
featured: false
tags: ["Tag1", "Tag2", "Tag3"]
---
```

### 3. Write Your Content
Use standard markdown syntax:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Lists**: `- item` or `1. item`
- **Links**: `[text](url)`
- **Blockquotes**: `> quote`
- **Code**: `` `code` `` or ``` ```code block```

### 4. Categories
Available categories:
- **High Performance** - Performance, optimization, elite lifestyle
- **Rebel Intelligence** - Anti-establishment, questioning norms
- **The Future Is Chill** - Technology, innovation, future trends

### 5. File Naming
Use kebab-case for filenames:
- ✅ `my-awesome-post.md`
- ❌ `My Awesome Post.md`
- ❌ `my_awesome_post.md`

## Features

### Automatic Features
- **SEO-friendly URLs**: `/blog/your-post-slug`
- **Category filtering**: Click categories to filter posts
- **Search functionality**: Search through all posts
- **Responsive design**: Works on all devices
- **Markdown rendering**: Full markdown support with syntax highlighting

### Frontmatter Options
- `title`: Post title (required)
- `excerpt`: Short description (required)
- `author`: Author name (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `readTime`: Estimated reading time (required)
- `category`: One of the three categories (required)
- `featured`: Boolean to mark as featured post (optional)
- `tags`: Array of tags for categorization (optional)

## Styling

The blog uses Tailwind CSS classes that match your site's design:
- **Typography**: Responsive text sizing
- **Colors**: Matches your brand colors
- **Spacing**: Consistent with site design
- **Components**: Uses your UI components

## Publishing

1. Save your markdown file in `content/posts/`
2. The blog automatically updates when you restart the development server
3. Your post will appear on `/blog` and be accessible at `/blog/your-slug`

## Tips

- **Keep titles under 60 characters** for better SEO
- **Write compelling excerpts** that hook readers
- **Use descriptive tags** for better categorization
- **Include images** by referencing them in markdown
- **Test your post** by viewing it in the browser

## Support

If you need help with the blog system, check:
- The template file for examples
- The existing posts for reference
- The markdown documentation for syntax