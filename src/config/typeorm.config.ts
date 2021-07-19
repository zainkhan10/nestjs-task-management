import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mypassword',
  database: 'task_management',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
