import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './shared/components/hero/hero.component';


const routes: Routes = [
  { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: HeroComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
