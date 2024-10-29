import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnChanges {
  @Input() blog: Blog | null = null;
  @Output() blogUpdated = new EventEmitter<Blog>();
  @Output() editCancelled = new EventEmitter<void>();

  blogForm: FormGroup;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(20)]],
      date: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['blog'] && this.blog) {
      // Update the form values with the current `blog` object values
      this.blogForm.patchValue({
        title: this.blog.title,
        author: this.blog.author,
        content: this.blog.content,
        date: this.blog.date,
      });
    }
  }

  editBlog(): void {
    if (this.blogForm.valid && this.blog) {
      const updatedBlog: Blog = {
        ...this.blog,
        ...this.blogForm.value,
      };

      this.blogService.updateBlog(updatedBlog).subscribe((result: Blog) => {
        this.blogUpdated.emit(result);
      });
    }
  }

  cancelEdit(): void {
    this.editCancelled.emit();
  }
}
