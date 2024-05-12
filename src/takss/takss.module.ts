import { Module } from '@nestjs/common';
import { TakssService } from './takss.service';
import { TakssController } from './takss.controller';
import { Takss } from './entities/takss.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Takss])],
  controllers: [TakssController],
  providers: [TakssService],
})
export class TakssModule {}
