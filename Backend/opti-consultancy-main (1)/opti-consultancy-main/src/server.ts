import Koa from "koa";
import Router from "koa-router";
import logger = require("koa-logger");
import bodyparser = require("koa-bodyparser");
import { authenticate } from "./middlewares/middleware";
import { requireAdmin } from "./middlewares/middleware";
import { login, signup } from "./controller/auth-controller";
import cors = require("@koa/cors");
import { registerUser, re_registerUser, cancelRegistration, forgotRegistration } from "./controller/applicant-controller";
import { getBlogs } from "./controller/blog-controller";
const port = process.env.PORT || 8080;

const app = new Koa();
const router = new Router();
app.use(logger());
app.use(bodyparser());
app.use(cors());

router.get("/", async (ctx) => {
  ctx.body = "Welcome to Koa";
});

router.post("/signup", signup);
router.post("/login", login);

// Admin Routes
// Blog Routes (Protected with admin access)
// router.post("/blogs", authenticate, requireAdmin, createBlog);
router.get("/getAllBlogs", getBlogs); // Public access
// router.put("/blogs/:blogId", authenticate, requireAdmin, updateBlog);
// router.delete("/blogs/:blogId", authenticate, requireAdmin, deleteBlog);

router.post("/registerUser",  registerUser);
router.post("/re_registerUser", authenticate, requireAdmin, re_registerUser);
router.post("/cancelRegistration", authenticate, requireAdmin, cancelRegistration);
router.post("/forgotRegistration", authenticate, requireAdmin, forgotRegistration); 
// router.get("/applicants", authenticate, requireAdmin, getApplicants);
// router.put(
//   "/applicants/:applicantId",
//   authenticate,
//   requireAdmin,
//   updateApplicant
// );
// router.delete(
//   "/applicants/:applicantId",
//   authenticate,
//   requireAdmin,
//   deleteApplicant
// );

app.use(router.routes());
app.listen(port);

console.log(` My koa server is up and listening on port ${port}`);
