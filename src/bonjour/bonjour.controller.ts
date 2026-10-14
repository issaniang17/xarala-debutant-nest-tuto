import { Controller, Get } from '@nestjs/common';

@Controller('bonjour')
export class BonjourController {
    @Get()
    hello(): string{
        return 'Bonjour ici'
    }
}
