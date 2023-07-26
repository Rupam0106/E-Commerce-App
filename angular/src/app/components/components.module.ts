import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './partials/header/header.component';
import { LoadingComponent } from './partials/loading/loading.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LoadingComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    LoadingComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,AppRoutingModule
  ]
})
export class ComponentsModule { }
