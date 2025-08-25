import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './home/product/product.component';
import { UserComponent } from './home/user/user.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home Page', 
        children: [
            {path: 'product' , component: ProductComponent, title: 'Product Page'},
            {path: 'user' , component: UserComponent, title: 'User Page'}
        ]
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'blog', component: BlogComponent, title: 'Blog Page'},
    {path: 'about', component: AboutComponent, title: 'About Us'}, 
    {path: '**', redirectTo: '/home', pathMatch: 'full'}   
];


