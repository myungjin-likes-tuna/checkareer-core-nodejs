import {Injectable} from '@nestjs/common';
import {query, session} from '../database'

@Injectable()
export class SkillService {
    constructor() {}

    public async searchSkills(): Promise<string[]> {
        return await session.run(query.getAllSkillData());
    }


    public async searchSkillById(): Promise<string> {
        console.info('서치!!');
        return 'test';
    }

    public async createSkill(variable: string, type: string, value: string): Promise<boolean> {
        console.info('create');
        return await session.run(query.createAdminData(variable, type, value));
    }
}
