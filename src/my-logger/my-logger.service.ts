import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as path from 'path'
@Injectable()
export class MyLoggerService extends ConsoleLogger{
    log(message: unknown, context?: unknown): void {
        super.log(message,context)
    }
    error(message: unknown, stack?: unknown, context?: unknown): void {
        super.error(message,context)
    }
}
