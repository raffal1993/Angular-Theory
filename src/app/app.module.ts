import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponentModule } from './components/sidebar/sidebar.component-module';
import { DashboardComponentModule } from './components/dashboard/dashboard.component-module';
import { WrapperComponentModule } from './components/wrapper/wrapper.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    SidebarComponentModule,
    DashboardComponentModule,
    WrapperComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
