import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogsService } from 'src/blogs/blogs.service';


@Controller('user')
export class UsercontrollerController {
    constructor(private blogservice: BlogsService) {
    }
    @Get()
    func1(): string {
        return "user controller"
    }
    @Get('/find')
    async findData(): Promise<any[]> {
        return this.blogservice.findBlog()
    }
    @Post('/createData')
    createData(@Body() record: string): any {
        this.blogservice.createBlog(record)
        return 'inserted a data'    
    }
}
