import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog.component';
import { PageComponent } from './page/page.component';
import { SearchbyidComponent } from './searchbyid/searchbyid.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    BlogComponent,
    SearchbyidComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
