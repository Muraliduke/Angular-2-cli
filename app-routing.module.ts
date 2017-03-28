import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume/resume.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DetailsComponent } from './details/details.component';

import { AuthGuard }            from './auth-guard.service';
import { AuthService }          from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: LoginComponent },
   { path: 'resume',  component: ResumeComponent,
   children: [
      { path: '', redirectTo: 'Summary', pathMatch: 'full' },
      { path: 'Summary', component: SummaryComponent,canActivate: [AuthGuard] },
      { path: 'Education', component: EducationComponent,canActivate: [AuthGuard] },
       { path: 'Skills', component: SkillsComponent,canActivate: [AuthGuard] },
       { path: 'Projects', component: ProjectsComponent,canActivate: [AuthGuard] },
       { path: 'Achievements', component: AchievementsComponent,canActivate: [AuthGuard] },
       { path: 'Hobbies', component: HobbiesComponent,canActivate: [AuthGuard] },
        { path: 'Details', component: DetailsComponent,canActivate: [AuthGuard] }

    ] }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule {}