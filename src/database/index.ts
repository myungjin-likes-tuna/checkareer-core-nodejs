import neo4j from 'neo4j-driver';
import config from './neo4j/config';

const driver: any = neo4j.driver(config.neo4j.url);
const session = driver.session();

export default session;