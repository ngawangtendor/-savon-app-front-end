import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { IngredientCreateComponent } from './pages/ingredient-create/ingredient-create.component';
import { IngredientManagerPageComponent } from './pages/ingredient-manager-page/ingredient-manager-page.component';


const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'recettes', component: RecettesComponent},
  { path: 'ingredients-create', component: IngredientCreateComponent}, 
  { path: 'ingredients-manager', component: IngredientManagerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
