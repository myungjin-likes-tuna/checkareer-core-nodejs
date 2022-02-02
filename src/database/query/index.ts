export default class Query {
    constructor() {}

    getAllSkillData() {
        return `MATCH (n) RETURN n`;
    }

    createAdminData(){
        return 'b';
    }
}