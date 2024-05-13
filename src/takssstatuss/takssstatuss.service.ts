import { Injectable } from '@nestjs/common';
import { CreateTakssstatussDto } from './dto/create-takssstatuss.dto';
import { UpdateTakssstatussDto } from './dto/update-takssstatuss.dto';

@Injectable()
export class TakssstatussService {
  create(createTakssstatussDto: CreateTakssstatussDto) {
    return 'This action adds a new takssstatuss';
  }

  findAll() {
    return `This action returns all takssstatuss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} takssstatuss`;
  }

  update(id: number, updateTakssstatussDto: UpdateTakssstatussDto) {
    return `This action updates a #${id} takssstatuss`;
  }

  remove(id: number) {
    return `This action removes a #${id} takssstatuss`;
  }
}
