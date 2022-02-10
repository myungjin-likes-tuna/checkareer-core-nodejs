export default class Query {
    constructor() {}

    getAllSkillData() {
        return `MATCH (n) RETURN n`;
    }

    getLimitSkill(limit: number) {
        return `MATCH (n) RETURN n LIMIT ${limit}`
    }

    getSkillByName() {
        return 'MATCH (n:'
    }

    createAdminData(variable: string ,type: string, value: string){
        return `CREATE (${variable}: ${type} {name: \'${value}\'})`;
    }
}