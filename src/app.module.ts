import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.8',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: '12345678',
          database: 'sys',
        },
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
