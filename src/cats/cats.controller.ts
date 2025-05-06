import { Controller, Get, HttpCode, Param, Post, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    // /cats
    @Get()
    scoobyDoo(): string[] {
        return ['This will return all cats from the database'];
    }

    // /breed
    @Get('breed')
    @Redirect('https://nestjs.com', 301)
    getBreed(): string[] {
        return ['Persian', 'Maine Coon', 'Siamese'];
    }

    // Dynamic route
    @Get(':id')
    // By deafault, the response from a route handler is 200 except it's a POST request which returns 201... but it can be changed usinfg the @HttpCode decorator
    // @HttpCode(201)
    getCatById(@Param (' ') id: number): string {
        return `This action returns a ${id} cat`;
    }

    // Post Handler
    @Post()
    createCat(): string {
        return 'This adds a new cat!'
    }
}
