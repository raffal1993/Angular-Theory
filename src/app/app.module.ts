import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WrapperComponentModule } from './shared/components/wrapper/wrapper.component-module';
import { SidebarComponentModule } from './shared/components/sidebar/sidebar.component-module';
import { DashboardComponentModule } from './shared/components/dashboard/dashboard.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    WrapperComponentModule,
    SidebarComponentModule,
    DashboardComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
