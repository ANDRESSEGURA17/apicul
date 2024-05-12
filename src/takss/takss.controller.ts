import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TakssService } from './takss.service';
import { CreateTakssDto } from './dto/create-takss.dto';
import { UpdateTakssDto } from './dto/update-takss.dto';

@Controller('takss')
export class TakssController {
  constructor(private readonly takssService: TakssService) {}

  @Post()
  create(@Body() createTakssDto: CreateTakssDto) {
    return this.takssService.create(createTakssDto);
  }

  @Get()
  findAll() {
    return this.takssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.takssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTakssDto: UpdateTakssDto) {
    return this.takssService.update(+id, updateTakssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.takssService.remove(+id);
  }
}
