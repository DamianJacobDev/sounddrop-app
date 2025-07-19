import HomeView from "./views/HomeView.vue";
import UserProfileView from "./views/UserProfileView.vue";

const routes = [
  { path: '/', component: HomeView},
  { path: '/user', component: UserProfileView},
];

export default routes