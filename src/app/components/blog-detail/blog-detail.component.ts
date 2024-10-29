import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  @Input() blog: Blog | null = null;
}
