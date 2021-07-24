import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const {
  RDS_HOSTNAME,
  RDS_PORT,
  RDS_USERNAME,
  RDS_PASSWORD,
  RDS_DB_NAME,
  TYPEORM_SYNC,
} = process.env;
const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: RDS_HOSTNAME || dbConfig.host,
  port: RDS_PORT || dbConfig.port,
  username: RDS_USERNAME || dbConfig.username,
  password: RDS_PASSWORD || dbConfig.password,
  database: RDS_DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: TYPEORM_SYNC || dbConfig.synchronize,
};
