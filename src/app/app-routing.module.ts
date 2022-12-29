import { AuthGuard } from './guards/auth.guard';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'game-details/:id',component:GameDetailsComponent,title:'Game Details'},

  {path:'games',loadChildren:()=>import('./games/games-routing.module').then((m)=>m.GamesRoutingModule)},


  {path:'login',component:LoginComponent,title:'login',canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent,title:'register',canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent,title:'Not Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled',useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
