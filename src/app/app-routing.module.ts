import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShortenerComponent} from "./shortener/shortener.component";

const routes: Routes = [{
  path: "",
  redirectTo: "shortener",
  pathMatch: "full"
}, {
  path: "shortener",
  component: ShortenerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
