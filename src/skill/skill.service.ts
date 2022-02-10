import {Injectable} from '@nestjs/common';
import {query, session} from '../database';
import objectToCsv from 'objects-to-csv';

@Injectable()
export class SkillService {
    constructor() {}

    public async searchSkills(): Promise<string[]> {
        return await session.run(query.getAllSkillData());
    }

    public async searchSkillById(): Promise<string> {
        return 'test';
    }

    public async searchSkillLimit(limit: number): Promise<string> {
        const result = await session.run(query.getLimitSkill(limit));
        return result;
    }

    public async createSkill(variable: string, type: string, value: string): Promise<boolean> {
        return await session.run(query.createAdminData(variable, type, value));
    }

    public async objectToCsv(): Promise<object> {
        const result = await session.run(query.getAllSkillData());
        console.info(result.records);
        const csv = new objectToCsv(await session.run(query.getAllSkillData()));
        await csv.toDisk('../csv/test.csv');
        console.info(await csv.toString);
        return {a: 1};
    }
}
