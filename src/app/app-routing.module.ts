import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "characters",
    pathMatch: "full"
  },
  {
    path: "characters",
    component: CharactersListComponent
  },
  {
    path: "character-details/:id",
    component: CharacterDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
