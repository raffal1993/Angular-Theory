import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeDetailComponentModule } from './pages/employee-detail/employee-detail.component-module';
import { EmployeesComponentModule } from './pages/employees/employees.component-module';
import { HomeComponentModule } from './pages/home/home.component-module';
import { PageNotFoundComponentModule } from './pages/page-not-found/page-not-found.component-module';
import { ProjectsComponentModule } from './pages/projects/projects.component-module';
import { TasksComponentModule } from './pages/tasks/tasks.component-module';
import { TeamDetailComponentModule } from './pages/team-detail/team-detail.component-module';
import { TeamsComponentModule } from './pages/teams/teams.component-module';
import { routeEmployeeDetail } from './routes/pages/employee-detail';
import { routeEmployees } from './routes/pages/employees';
import { routeHome } from './routes/pages/home';
import { routePageNotFound } from './routes/pages/page-not-found';
import { routeProjects } from './routes/pages/projects';
import { routeTasks } from './routes/pages/tasks';
import { routeTeamDetail } from './routes/pages/team-detail';
import { routeTeams } from './routes/pages/teams';

@NgModule({
  imports: [
    RouterModule.forRoot([
      routeEmployeeDetail,
      routeEmployees,
      routeHome,
      routeProjects,
      routeTasks,
      routeTeamDetail,
      routeTeams,
      routePageNotFound,
    ]),
    EmployeeDetailComponentModule,
    EmployeesComponentModule,
    HomeComponentModule,
    ProjectsComponentModule,
    TasksComponentModule,
    TeamDetailComponentModule,
    TeamsComponentModule,
    PageNotFoundComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
