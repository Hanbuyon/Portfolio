import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route(":lang", "routes/home.tsx"),
  route(":lang/projects/:slug", "routes/project.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
