import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineCollection, defineConfig, s } from "velite";

// Audience enum — referenced by every content collection.
// Feeds the audience switcher's content filtering.
const audienceEnum = s.enum(["developer", "employer", "client", "reader", "student"]);

// Fields shared across all content collections.
const baseFields = {
  title: s.string().max(120),
  slug: s.slug("global"),
  description: s.string().max(240),
  date: s.isodate(),
  audiences: s.array(audienceEnum).min(1),
  tags: s.array(s.string()).default([]),
  status: s.enum(["draft", "published"]).default("draft"),
  featured: s.boolean().default(false),
  content: s.mdx(),
};

// Blog — general writing, mixed audiences.
const blog = defineCollection({
  name: "BlogPost",
  pattern: "blog/**/*.mdx",
  schema: s.object(baseFields).transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
});

// Projects — case studies with extra metadata for tech stack, role, links.
const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      ...baseFields,
      stack: s.array(s.string()).default([]),
      role: s.string().optional(),
      company: s.string().optional(),
      live: s.string().url().optional(),
      repository: s.string().url().optional(),
    })
    .transform((data) => ({ ...data, permalink: `/projects/${data.slug}` })),
});

// Notes — RFC-depth technical pieces. Pairs with the RFC-native positioning.
const notes = defineCollection({
  name: "Note",
  pattern: "notes/**/*.mdx",
  schema: s
    .object({
      ...baseFields,
      difficulty: s.enum(["intro", "intermediate", "advanced"]).default("intermediate"),
      references: s.array(s.string().url()).default([]),
    })
    .transform((data) => ({ ...data, permalink: `/notes/${data.slug}` })),
});

// Pages — About page and similar static content. Simpler schema, no audience filtering.
const pages = defineCollection({
  name: "Page",
  pattern: "about/**/*.mdx",
  schema: s.object({
    title: s.string().max(120),
    slug: s.slug("global"),
    description: s.string().max(240),
    content: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blog, projects, notes, pages },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["heading-anchor"] },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          keepBackground: false,
        },
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
});
