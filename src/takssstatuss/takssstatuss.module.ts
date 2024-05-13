import { Module } from '@nestjs/common';
import { TakssstatussService } from './takssstatuss.service';
import { TakssstatussController } from './takssstatuss.controller';
import { Takssstatuss } from './entities/takssstatuss.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Takssstatuss])],
  controllers: [TakssstatussController],
  providers: [TakssstatussService],
})
export class TakssstatussModule {}
