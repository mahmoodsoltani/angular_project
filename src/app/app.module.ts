import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogCreateComponent,
    BlogDetailComponent,
    BlogEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    AngularToastifyModule,
  ],
  providers: [provideAnimationsAsync(), ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
