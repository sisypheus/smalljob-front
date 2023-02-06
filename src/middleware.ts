import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/login?error=true",
  },
});

export const config = {
  matcher: ["/profile/:x*", "/offers/:x*"],
};
