import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const vacancies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vacancies' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    id: z.string(),
    employment: z.enum(['Full-time']),
    location: z.enum(['Remote']),
    disabled: z.boolean().optional(),
    project: z.string().optional(),
    offerings: z.array(z.string()).optional(),
    desiredSkills: z.array(z.string()).optional(),
    requiredSkills: z.array(z.string()).optional(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { vacancies };
