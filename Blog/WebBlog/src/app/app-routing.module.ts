import { NgModule } from '@angular/core';
import { RouterModule, Routes , ParamMap} from '@angular/router';
import { AppComponent } from './blog.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path: "page/:id", component: PageComponent},
  {path: "", component: AppComponent}
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)]],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
