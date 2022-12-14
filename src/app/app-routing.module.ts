import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TennisScoreComponent } from './tennis-score/tennis-score.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'tennis', component: TennisScoreComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
