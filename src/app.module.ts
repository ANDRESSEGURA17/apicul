import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TakssModule } from './takss/takss.module';
import { Takss } from './takss/entities/takss.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'oracle21',
    database: 'apicul',
    entities: [User,Takss],
    synchronize: true,
  }), UserModule, TakssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
