import { auth } from "./auth";

export default auth(async (req) => {
  const session = await auth();
  const { nextUrl } = req;

  const publicRoutes = ["/", "/login", "/sign-up"];

  const privateRoutes = [
    "/admin",
    "/admin/users",
    "/admin/listing",
    "/admin/listing/create",
    "/admin/agreements",
    "/admin/agreements/create",
    "/dealer",
    "/dealer/agreements",
    "/client",
    "/client/agreements",
  ];

  const isLoggedIn = !!session;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);

  if (isPublicRoute) {
    return undefined;
  }

  if (isPrivateRoute && !isLoggedIn) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  if (isPrivateRoute && isLoggedIn) {
    return undefined;
  }

  return undefined;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
