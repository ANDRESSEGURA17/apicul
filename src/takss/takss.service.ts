import { Injectable } from '@nestjs/common';
import { CreateTakssDto } from './dto/create-takss.dto';
import { UpdateTakssDto } from './dto/update-takss.dto';

@Injectable()
export class TakssService {
  create(createTakssDto: CreateTakssDto) {
    return 'This action adds a new takss';
  }

  findAll() {
    return `This action returns all takss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} takss`;
  }

  update(id: number, updateTakssDto: UpdateTakssDto) {
    return `This action updates a #${id} takss`;
  }

  remove(id: number) {
    return `This action removes a #${id} takss`;
  }
}
