import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerComponentComponent } from '../customer-component/customer-component.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

/*
    * Providing the routes configuration
    * Assigning it to the RouterModule.forRoot()
*/
const routes: Routes = [
    { path: 'customers', component: CustomerComponent, pathMatch: 'full',
    children: [
    { path: 'customer-form', component: CustomerComponentComponent, pathMatch: 'full' },
    { path: 'customer-detail', component: CustomerDetailComponent, pathMatch: 'full' },
   ]
    }
];

export const appRouting = RouterModule.forRoot(routes);
