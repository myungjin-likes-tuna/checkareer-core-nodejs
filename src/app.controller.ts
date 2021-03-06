import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { session, query } from './database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const result = await session.run(query.getAllSkillData());
    return this.appService.getHello();
  }
}
