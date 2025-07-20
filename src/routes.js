import HomeView from "./views/HomeView.vue";
import UserProfileView from "./views/UserProfileView.vue";
import SongDetailsView from "./views/SongDetailsView.vue";

const routes = [
  { path: '/', component: HomeView},
  { path: '/user', component: UserProfileView},
  { path: '/track/:id', component: SongDetailsView},
];

export default routes