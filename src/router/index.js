// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '@/views/Home.vue'),
  },
  {
    path: "/product/:id",
    name: "productId",
    props: true,
    component: () => import("@/views/ProductPage.vue"),
    children: [
      {
        path: "specifications",
        name: "productSpecifications",
        props: true,
        component: () =>
          import("@/components/ProductSpecificationsComponent.vue"),
      },
      {
        path: "description",
        name: "productDescription",
        props: true,
        component: () =>
          import("@/components/ProductDescriptionComponent.vue"),
      },
      {
        path: "feedback",
        name: "productFeedback",
        props: true,
        component: () => import("@/components/ProductFeedbackComponent.vue"),
      },
    ],
  },
  {
    path: "/category",
    component: () => import("@/views/CategoryPage.vue"),
  },
  {
    path: "/news",
    component: () => import("@/views/NewsPage.vue"),
  },
  {
    path: "/cart",
    component: () => import("@/views/CartPage.vue"),
  },
  {
    path: "/order_success",
    component: () => import("@/views/OrderSuccessPage.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    path: "/error404",
    component: () => import("@/views/Error404Page.vue"),
  },
  { path: "/:catchAll(.*)", redirect: "/error404" },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
