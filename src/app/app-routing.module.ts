import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: LandingComponent }, // default path
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterationComponent },
  { path: '**', component: PageNotFoundComponent } // must be last object in the list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileComponent, SettingsComponent, LandingComponent, RegisterationComponent, PageNotFoundComponent];
