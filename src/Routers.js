import Home from '@/page/Home';
import Login from '@/page/Login';
import NotFound from '@/page/NotFound';

const router = [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
    loadData: Home.loadData
  },
  {
    path: '/login',
    component: Login,
    key: 'login'
  },
  {
    path: '*',
    component: NotFound
  }
];

export default router;
