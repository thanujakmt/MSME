import { Context } from "koa";
import knex from "../database/db";

export const registerUser = async (ctx: any) => {
  try {
    console.log("rftggfsw", ctx.request.body);
      const body = ctx.request.body;

    // Validate required fields
    if (!body.applicant_name || !body.mobile_number || !body.email_id || !body.category || Object.values(body.additional_info).length == 0) {
      ctx.status = 400;
      ctx.body = { message: "Required fields missing" };
      return;
    }

    const result = await knex("applicants")
      .insert({
        applicant_name: body.applicant_name,
        mobile_number: body.mobile_number,
        email_id: body.email_id,
        category: body.category,
        additional_info: body.additional_info
      })
      .returning("*");
    const applicant = Array.isArray(result) ? result[0] : result?.[0];
    
    ctx.status = 200;
    ctx.body = { message: "Registered successfully", applicant };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

export const re_registerUser = async (ctx: any) => {
  try {
    console.log("rftggfsw", ctx.request.body);
      const body = ctx.request.body;

    // Validate required fields
    if (!body.name || !body.number || !body.email || !body.uamNumber || !body.state || !body.updateChange || !body.termsOfService) {
      ctx.status = 400;
      ctx.body = { message: "Required fields missing" };
      return;
    }

    const [applicant] = await knex("applicants")
      .insert({
        name: body.name,
        number: body.number,
        email: body.email,
        updateChange: body.updateChange,
        termsOfService: body.termsOfService,
        state: body.state
      })
      .returning("*");

    ctx.status = 200;
    ctx.body = { message: "User re registered successfully", applicant };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

export const cancelRegistration = async (ctx: any) => {
  try {
    console.log("rftggfsw", ctx.request.body);
      const body = ctx.request.body;

    // Validate required fields
    if (!body.name || !body.number || !body.email || !body.uamNumber || !body.state || !body.district || !body.cancellation || !body.businessName || !body.termsOfService) {
      ctx.status = 400;
      ctx.body = { message: "Required fields missing" };
      return;
    }

    const [applicant] = await knex("applicants")
      .insert({
        name: body.name,
        number: body.number,
        email: body.email,
        uamNumber: body.uamNumber,
        cancellation: body.cancellation,
        businessName: body.businessName,
        termsOfService: body.termsOfService,
        state: body.state,
        district: body.district,
      })
      .returning("*");

    ctx.status = 200;
    ctx.body = { message: "Applicant created successfully", applicant };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

export const forgotRegistration = async (ctx: any) => {
  try {
    console.log("rftggfsw", ctx.request.body);
      const body = ctx.request.body;

    // Validate required fields
    if (!body.name || !body.number || !body.email || !body.recover || !body.verificationCode || !body.termsOfService || !body.termsOfService1) {
      ctx.status = 400;
      ctx.body = { message: "Required fields missing" };
      return;
    }

    const [applicant] = await knex("applicants")
      .insert({
        name: body.name,
        number: body.number,
        email: body.email,
        recover: body.recover,
        verificationCode: body.verificationCode,
        termsOfService: body.termsOfService,
        termsOfService1: body.termsOfService1
      })
      .returning("*");

    ctx.status = 200;
    ctx.body = { message: "successfully", applicant };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};
