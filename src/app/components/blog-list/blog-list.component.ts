import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { Blog, BlogRaw } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  selectedBlog: Blog | null = null;
  showCreateForm = false;

  constructor(
    private blogService: BlogService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data.map((blog) => ({
        ...blog,
        showDetail: false,
        showEdit: false,
      }));
    });
  }

  toggleBlogDetail(blog: Blog): void {
    this.blogs.forEach((b) => {
      if (blog != b) b.showDetail = false;
      b.showEdit = false;
    });
    blog.showDetail = !blog.showDetail;
  }

  deleteBlog(blog: Blog): void {
    this.blogService.deleteBlog(blog.id).subscribe(() => {
      this.blogs = this.blogs.filter((b) => b !== blog);
    });
    this.toastService.success('Blog deleted Successfully!');
  }
  editBlog(blog: Blog): void {
    this.blogs.forEach((b) => {
      if (b != blog) b.showEdit = false;
      b.showDetail = false;
    });
    blog.showEdit = !blog.showEdit;
  }
  handleBlogCreated(blog: BlogRaw): void {
    this.blogs.push({ ...blog, showDetail: false, showEdit: false });
    this.showCreateForm = false;
    this.toastService.success('The new blog Added Successfully!');
  }
  handleEditCancelled(updatedBlog: Blog): void {
    const index = this.blogs.findIndex((b) => b.id === updatedBlog.id);
    this.blogs[index] = {
      ...updatedBlog,
      showEdit: false,
    };
  }
  handleBlogUpdated(updatedBlog: Blog): void {
    const index = this.blogs.findIndex((b) => b.id === updatedBlog.id);
    this.blogs[index] = {
      ...updatedBlog,
      showDetail: false,
      showEdit: false,
    };
    this.toastService.success('Blog Updated Successfully!');
  }
}
