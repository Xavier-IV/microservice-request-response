import { Body, Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get()
  getHello(@Body() body: number[]): Observable<number> {
    return this.client.send<number>({ cmd: 'sum' }, body);
  }
}
