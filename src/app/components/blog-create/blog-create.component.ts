import { Component, EventEmitter, Output } from '@angular/core';
import { BlogRaw } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { UUID } from 'angular2-uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(20)]],
      date: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  @Output() blogCreated = new EventEmitter<BlogRaw>();

  createBlog() {
    if (this.blogForm.valid) {
      const newBlog = this.blogForm.value;
      this.blogService.addBlog(newBlog).subscribe((blog: BlogRaw) => {
        this.blogCreated.emit(blog);
      });
    }
  }
}
