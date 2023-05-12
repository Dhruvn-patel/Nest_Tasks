import { All, Body, Controller, DefaultValuePipe, Get, HttpCode, HttpStatus, Param, ParseArrayPipe, ParseIntPipe, Post, Query } from '@nestjs/common';



@Controller('roles')
export class RolesController {



    @Get()
    rolefun(): object {
        return { message: "user modules" }
    }

    @Post('/insertdata')
    @HttpCode(201)
    insertData(@Body() record: any): string {
        console.log(record);
        return `data inserted ${record.name}`
    }
    /** pipe validations */
    @All('/alldata/:pageno')
    // globalMsg(@Param('pageno', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) pageno: number): string {
    //     return `inserted page ${pageno}`

    // }

    // @All('/alldata/:pageno')
    // globalMsg(@Param('pageno', new DefaultValuePipe(1)) pageno: number): string {
    //     return `inserted page ${pageno}`
    // }

    @All('/alldataquery')
    globalMsg(@Query('pageno', new ParseArrayPipe({ items: Number, separator: ',' })) pageno: number[]): string {
        return `inserted page ${pageno}`
    }
}
