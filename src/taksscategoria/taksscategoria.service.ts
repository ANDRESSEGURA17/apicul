import { Injectable } from '@nestjs/common';
import { CreateTaksscategoriaDto } from './dto/create-taksscategoria.dto';
import { UpdateTaksscategoriaDto } from './dto/update-taksscategoria.dto';

@Injectable()
export class TaksscategoriaService {
  create(createTaksscategoriaDto: CreateTaksscategoriaDto) {
    return 'This action adds a new taksscategoria';
  }

  findAll() {
    return `This action returns all taksscategoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taksscategoria`;
  }

  update(id: number, updateTaksscategoriaDto: UpdateTaksscategoriaDto) {
    return `This action updates a #${id} taksscategoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} taksscategoria`;
  }
}
