export default defineNuxtRouteMiddleware((to, from) => {
    if (!to.path.endsWith("/") && to.path !== "/") {
      // return navigateTo(to.path + "/", { redirectCode: 301 });
    }
  });