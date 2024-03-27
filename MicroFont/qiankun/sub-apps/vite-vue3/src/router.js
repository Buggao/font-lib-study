const routes= [
  {
    path: "/",
    name: "vite",
    component: () => import("./view/ViteView.vue"),
  },
  {
    path: "/vue",
    name: "vue",
    component: () => import("./view/VueView.vue"),
  },
]
export default routes;
