import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    name: column.text(),
  }
})

const ShortenedUrl = defineTable({
  columns: {
    userId: column.number({ references: () => User.columns.id }),
    url: column.text(),
    slug: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    ShortenedUrl,
  }
});
