import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { CoursesComponent } from './courses/courses.component';
import { MaterialDesignModule }  from "../material-design/material-design.module";


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    HomeComponent,
    CoursesComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutes,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  

})
export class AppModule { };


