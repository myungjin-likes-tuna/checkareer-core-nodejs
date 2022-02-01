import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import session  from './database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const name = 'test';
    const result: any = session.run(`CREATE (a: Person {name: ${name} RETURN a`);
    const singleRecord: any = result.records[0];
    const node = singleRecord.get(0);
    console.info(node.properties.name);
    return this.appService.getHello();
  }
}
