import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewThoughtComponent } from './components/thougths/new-thought/new-thought.component';
import { ListThoughtComponent } from './components/thougths/list-thought/list-thought.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "listThought"
  },
  {
    path: "newThought",
    component: NewThoughtComponent
  },
  {
    path: "listThought",
    component: ListThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
