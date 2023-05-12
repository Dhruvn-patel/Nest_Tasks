import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {

    private readonly blogs: any[] = [];

    createBlog(record: any): any {
        this.blogs.push(record)
    }

    findBlog(): any[] {
        return this.blogs;
    }
}
