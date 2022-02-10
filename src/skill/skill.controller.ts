import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {SkillService} from "./skill.service";
import { CreateSkillDto } from './DTO/createSkillDto'

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService) {}

    @Get('/csv')
    async csv(): Promise<object> {
        return await this.skillService.objectToCsv();
    }

    @Get('/')
    async skills(): Promise<string[]> {
        return await this.skillService.searchSkills();
    }

    @Get('/limit/:limit')
    async skillLimit(@Param('limit') limit: number): Promise<string> {
        return await this.skillService.searchSkillLimit(limit)
    }

    @Post('/create/admin')
    async createSkill(@Body() createSkillDto: CreateSkillDto) : Promise<boolean> {
        return await this.skillService.createSkill(createSkillDto.variable, createSkillDto.type, createSkillDto.value);
    }
}
