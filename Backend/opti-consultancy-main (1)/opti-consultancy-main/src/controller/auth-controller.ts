import { Context } from "koa";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import knex from "../database/db";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const signup = async (ctx: any) => {
  try {
    const { fullName, mobile, email, password } = ctx.request.body;

    // Validate required fields
    if (!fullName || !mobile || !email || !password) {
      ctx.status = 400;
      ctx.body = { message: "All fields are required" };
      return;
    }

    // Check if user already exists
    const existingUser = await knex("users").where({ email }).first();
    if (existingUser) {
      ctx.status = 409;
      ctx.body = { message: "User already exists" };
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const [user] = await knex("users")
      .insert({
        full_name: fullName,
        mobile,
        email,
        password: hashedPassword,
        role: "user", // Default role
      })
      .returning(["id", "full_name", "email", "role"]);

    ctx.status = 201;
    ctx.body = { message: "Signup successful", user };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};

export const login = async (ctx: any) => {
  try {
    const { email, password } = ctx.request.body;

    // Validate input
    if (!email || !password) {
      ctx.status = 400;
      ctx.body = { message: "Email and password are required" };
      return;
    }

    // Find user
    const user = await knex("users").where({ email }).first();
    if (!user || !(await bcrypt.compare(password, user.password))) {
      ctx.status = 401;
      ctx.body = { message: "Invalid credentials" };
      return;
    }

    // Generate token
    const token = jwt.sign(
      { userId: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    ctx.status = 200;
    ctx.body = { token, user: { id: user.id, email: user.email, role: user.role } };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: "Internal server error", error: err };
  }
};