import { NgModule } from '@angular/core';
import { RouterModule, Routes , ParamMap} from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path: "page/:id", component: PageComponent},
  {path: "", component: BlogComponent}
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)]],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
