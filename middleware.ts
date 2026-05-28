import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/about", "/contact", "/sign-in(.*)", "/sign-up(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\\.[\\w]+$|_next).*) ", "/(api|trpc|webhooks)(.*)"],
};
