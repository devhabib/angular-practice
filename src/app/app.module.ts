import { SummaryPipe } from "./summary.pipe";
import { CoursesService } from "./courses.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "../app/courses.component";
import { CourseComponent } from "./course/course.component";

@NgModule({
  declarations: [AppComponent, CourseComponent, CoursesComponent, SummaryPipe ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
