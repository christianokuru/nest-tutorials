import { Controller, Get, HttpCode, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    // /cats
    @Get()
    scoobyDoo(): string {
        return 'This action returns all cats from the database';
    }

    // /breed
    @Get('breed')
    getBreed(): string[] {
        return ['Persian', 'Maine Coon', 'Siamese'];
    }

    // Dynamic route
    @Get(':id')
    // By deafault, the response from a route handler is 200 except it's a POST request which returns 201... but it can be changed usinfg the @HttpCode decorator
    // @HttpCode(201)
    getCatById(@Param ('id') id: number): string {
        return `This action returns a ${id} cat`;
    }
}
