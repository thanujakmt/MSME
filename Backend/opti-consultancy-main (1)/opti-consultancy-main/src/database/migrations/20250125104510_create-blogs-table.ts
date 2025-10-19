import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("blogs", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
        table.string("title").notNullable();
        table.text("content").notNullable();
        table.string("author").notNullable();
        table.timestamps(true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
}

