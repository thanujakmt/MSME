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

    // const result = await knex("applicants")
    //   .insert({
    //     applicant_name: body.applicant_name,
    //     mobile_number: body.mobile_number,
    //     email_id: body.email_id,
    //     category: body.category,
    //     additional_info: body.additional_info
    //   })
    //   .returning("*");
    // const applicant = Array.isArray(result) ? result[0] : result?.[0];

    ctx.status = 200;
    ctx.body = {
    "id": "32bceb0e-231f-4c5a-b98a-506e41f4b44e",
    "applicant_name": "wsedrfgt",
    "mobile_number": "8745854584",
    "email_id": "swdefrgt@gmail.com",
    "category": "General",
    "additional_info": {
        "ifsc": "584jkn",
        "male": "8",
        "other": "5",
        "state": "Madhya Pradesh",
        "female": "5",
        "account": "oiujhghjkl854",
        "address": "oijlkmkmk",
        "panCard": "khjklkjhvh",
        "pinCode": "854524",
        "activity": "Manufacturer",
        "district": "Dindori",
        "businessName": "kjnjhbnj",
        "organisation": "Proprietorship",
        "additionalDetails": "qwertyujk",
        "dateOfCommencement": "2025-11-06"
    },
    "created_at": "2025-11-04T05:23:32.886Z",
    "updated_at": "2025-11-04T05:23:32.886Z"
};
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
    if (!body.applicant_name || !body.mobile_number || !body.email_id || !body.category || Object.values(body.additional_info).length == 0) {
      ctx.status = 400;
      ctx.body = { message: "Required fields missing" };
      return;
    }

    // const result = await knex("applicants")
    //   .insert({
    //     applicant_name: body.applicant_name,
    //     mobile_number: body.mobile_number,
    //     email_id: body.email_id,
    //     category: body.category,
    //     additional_info: body.additional_info
    //   })
    //   .returning("*");
    // const applicant = Array.isArray(result) ? result[0] : result?.[0];

    ctx.status = 200;
    ctx.body = {
      "message": "User re registered successfully",
      "applicant":{
          "id": "8918e04c-dfc3-4f1f-a1b5-456a1540b5ce",
          "applicant_name": "ewfwe",
          "mobile_number": "8548545241",
          "email_id": "swdefrgt@gmail.com",
          "category": "OMNH",
          "additional_info": {
              "state": "Kerala",
              "uamNumber": "8468545465645",
              "agreeToTerms": true,
              "changesRequired": "yes"
          },
          "created_at": "2025-11-04T05:25:21.842Z",
          "updated_at": "2025-11-04T05:25:21.842Z"
      }};
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
    if (!body.applicant_name || !body.mobile_number || !body.email_id || !body.category || Object.values(body.additional_info).length == 0) {
      ctx.status = 400;
      ctx.body = { message: "Required fields missing" };
      return;
    }
    // const result = await knex("applicants")
    //   .insert({
    //     applicant_name: body.applicant_name,
    //     mobile_number: body.mobile_number,
    //     email_id: body.email_id,
    //     category: body.category,
    //     additional_info: body.additional_info
    //   })
    //   .returning("*");
    // const applicant = Array.isArray(result) ? result[0] : result?.[0];

    ctx.status = 200;
    ctx.body = {
    "message": "Registration cancelled successfully",
    "applicant": {
        "id": "62cf18f7-2a45-44ad-bb5b-049571bae05a",
        "applicant_name": "scsdc",
        "mobile_number": "8541532522",
        "email_id": "emewm@gmail.com",
        "category": "OMNH",
        "additional_info": {
            "state": "Bihar",
            "district": "Bhagalpur",
            "agreeToTerms": true,
            "businessName": "erfefe",
            "udyamUamNumber": "584584545454",
            "TypeOfCancellation": "No Further Need"
        },
        "created_at": "2025-10-31T15:29:34.853Z",
        "updated_at": "2025-10-31T15:29:34.853Z"
    }
};
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
    ctx.body = { message: "Forgot registration successfully", applicant };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

