import { Context } from "koa";
import knex from "../database/db";

export const createBlog = async (ctx: any) => {
  try {
    const { title, content } = ctx.request.body;
    const author = ctx.state.user.userId; // Get author from authenticated user

    if (!title || !content) {
      ctx.status = 400;
      ctx.body = { message: "Title and content are required" };
      return;
    }

    const [blog] = await knex("blogs")
      .insert({ title, content, author })
      .returning("*");

    ctx.status = 201;
    ctx.body = { message: "Blog created successfully", blog };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

export const getBlogs = async (ctx: any) => {
  try {
    const blogs = await knex("blogs")
      .select("*")
      .orderBy("created_at", "desc");

    ctx.status = 200;
    ctx.body = { blogs };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

export const updateBlog = async (ctx: any) => {
  try {
    const { blogId } = ctx.params;
    const { title, content } = ctx.request.body;

    if (!title && !content) {
      ctx.status = 400;
      ctx.body = { message: "At least one field to update is required" };
      return;
    }

    const [updatedBlog] = await knex("blogs")
      .where({ id: blogId })
      .update({
        ...(title && { title }),
        ...(content && { content }),
      })
      .returning("*");

    if (!updatedBlog) {
      ctx.status = 404;
      ctx.body = { message: "Blog not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Blog updated successfully", blog: updatedBlog };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

export const deleteBlog = async (ctx: Context) => {
  try {
    const { blogId } = ctx.params;

    const deleted = await knex("blogs").where({ id: blogId }).del();

    if (!deleted) {
      ctx.status = 404;
      ctx.body = { message: "Blog not found" };
      return;
    }

    ctx.status = 200;
    ctx.body = { message: "Blog deleted successfully" };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};