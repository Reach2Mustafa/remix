/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",

  // Add your route configuration here
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route(" ","routes/check/check.js")
    
    });
  },
 
};
