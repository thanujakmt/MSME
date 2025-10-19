import { Context, Next } from "koa";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const authenticate = async (ctx: Context, next: Next) => {
  try {
    const token = ctx.headers.authorization?.split(" ")[1];
    
    if (!token) {
      ctx.status = 401;
      ctx.body = { message: "Authentication required" };
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    ctx.state.user = decoded;
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { message: "Invalid or expired token" };
  }
};

export const requireAdmin = async (ctx: Context, next: Next) => {
  if (ctx.state.user?.role !== "admin") {
    ctx.status = 403;
    ctx.body = { message: "Admin access required" };
    return;
  }
  await next();
};