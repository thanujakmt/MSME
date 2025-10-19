import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("applicants", (table) => {
      console.log("swrftyujikj", table);
      
        table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
        table.string("name").notNullable();
        table.string("number").notNullable().unique();
        table.string("email").notNullable().unique();
        table.string("category").notNullable();
        table.string("address").notNullable();
        table.string("pinCode").notNullable();
        table.string("state").notNullable();
        table.string("district").notNullable();
        table.string("organisation").notNullable();
        table.string("businessName").notNullable();
        table.string("dateOfCommencement").notNullable();
        table.string("activity").notNullable();
        table.string("additionalDetails").notNullable();
        table.string("male").notNullable();
        table.string("female").notNullable();
        table.string("other").notNullable();
        table.string("account").notNullable();
        table.string("ifsc").notNullable();
        table.string("panCard").notNullable();
        table.string('formId').notNullable();
        table.timestamps(true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
}

