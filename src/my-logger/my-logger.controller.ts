import { Controller } from '@nestjs/common';
import { MyLoggerService } from './my-logger.service';

@Controller('my-logger')
export class MyLoggerController {
  constructor(private readonly myLoggerService: MyLoggerService) {}
}
