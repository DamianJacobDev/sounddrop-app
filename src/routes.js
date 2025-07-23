import HomeView from "./views/HomeView.vue";
import UserProfileView from "./views/UserProfileView.vue";
import SongDetailsView from "./views/SongDetailsView.vue";
import UploadForm from "./components/UploadForm.vue";

const routes = [
  { path: '/', component: HomeView},
  { path: '/user', component: UserProfileView},
  { path: '/track/:id', component: SongDetailsView},
  { path: '/upload', component: UploadForm}
];

export default routes