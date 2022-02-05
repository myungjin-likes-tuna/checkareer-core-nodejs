import {Controller, Get, Post} from '@nestjs/common';
import {SkillService} from "./skill.service";

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService) {}

    @Get('/')
    async skills(): Promise<string[]> {
        return await this.skillService.searchSkills();
    }

    @Get('/:skillId')
    async skill(): Promise<string> {
        return await this.skillService.searchSkillById();
    }

    @Post('/create/admin')
    async createSkill(): Promise<boolean> {
        return await this.skillService.createSkill();
    }

}
