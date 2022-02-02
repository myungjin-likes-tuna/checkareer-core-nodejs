import neo4j, {AuthToken} from 'neo4j-driver';
import config from './neo4j/config';
import Query from "./query";

const driver: any = neo4j.driver(config.neo4j.url);
export const query = new Query();
export const session = driver.session();
