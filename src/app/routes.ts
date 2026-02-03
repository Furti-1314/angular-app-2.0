import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home';
import {Details} from './components/details/details';

// the array represents the routes in the application
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];
export default routeConfig;
