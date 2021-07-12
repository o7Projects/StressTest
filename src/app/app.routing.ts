import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'stresstest',
    loadChildren:'./modules/stress-test/stress-test.module#StressTestModule'
  }
  //,
  //{
  //  path:'session',
   // loadChildren:'./modules/session/session.module#SessionModule'
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
