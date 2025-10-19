import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("full_name").notNullable();
    table.string("mobile").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("role").defaultTo("user").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
