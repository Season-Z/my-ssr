import Home from '@/page/Home';
import Login from '@/page/Login';

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
  }
];

export default router;
