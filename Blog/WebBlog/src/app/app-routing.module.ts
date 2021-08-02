import { NgModule } from '@angular/core';
import { RouterModule, Routes , ParamMap} from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog.component';
import { PageComponent } from './page/page.component';
import {SearchbyidComponent} from './searchbyid/searchbyid.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "page/:id", component: PageComponent},
  {path: "", component: BlogComponent},
  {path: "tag/:tag", component: SearchbyidComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)]],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
