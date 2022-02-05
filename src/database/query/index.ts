export default class Query {
    constructor() {}

    getAllSkillData() {
        return `MATCH (n) RETURN n`;
    }

    getSkillByName() {
        return 'MATCH (n:'
    }

    createAdminData(variable: string ,type: string, value: string){
        return `CREATE (${variable}: ${type} {name: \'${value}\'})`;
    }
}