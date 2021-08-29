import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ElnadaComponent } from "./elnada/elnada.component";
import { HomeComponent } from "./home/home.component";
import { QuestionsComponent } from "./questions/questions.component";
import { SummaryComponent } from "./summary/summary.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'intro', component: QuestionsComponent },
    { path: 'about', component: SummaryComponent },
    { path: 'elnada', component: ElnadaComponent }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class StressTestRouting { 

}