import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemsComponent } from './components/main/items/items.component';
import { ProductItemComponent } from './components/main/items/product-item/product-item.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { CartItemComponent } from './components/main/sidebar/cart-item/cart-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ItemsComponent,
    SidebarComponent,
    ProductItemComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
