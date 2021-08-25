import { NgModule } from '@angular/core';
import { RouterModule, Routes , ParamMap} from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog.component';
import { PageComponent } from './page/page.component';
import {SearchbyidComponent} from './searchbyid/searchbyid.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchbyauthorComponent } from './searchbyauthor/searchbyauthor.component';

const routes: Routes = [
  {path: "page/:id", component: PageComponent},
  {path: "", component: BlogComponent},
  {path: "tag/:tag", component: SearchbyidComponent},
  {path: "author/:author", component: SearchbyauthorComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)]],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
