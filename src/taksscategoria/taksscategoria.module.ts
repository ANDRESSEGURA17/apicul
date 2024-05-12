import { Module } from '@nestjs/common';
import { TaksscategoriaService } from './taksscategoria.service';
import { TaksscategoriaController } from './taksscategoria.controller';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TaksscategoriaController],
  providers: [TaksscategoriaService],
})
export class TaksscategoriaModule {}
