import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Gallery from '@/views/Gallery.vue';
import Events from '@/views/Events.vue';
import Hobbies from '@/views/Hobbies.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/gallery', component: Gallery },
    { path: '/events', component: Events },
    { path: '/hobbies', component: Hobbies },
  ],
});
