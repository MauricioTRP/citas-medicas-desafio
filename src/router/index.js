import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

/** createRouter -> crear instancia del enrutador */
const router = createRouter({
  /** 
   * createWebHistory -> create URL en formato "/contacts" 
   * import.meta.env.BASE_URL
   **/
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/inicio',
      component: HomeView
    },
    {
      name: 'contact',
      path: '/contact-us',
      component: ContactView
    }
  ]
})

export default router