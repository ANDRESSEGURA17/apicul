import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaksscategoriaService } from './taksscategoria.service';
import { CreateTaksscategoriaDto } from './dto/create-taksscategoria.dto';
import { UpdateTaksscategoriaDto } from './dto/update-taksscategoria.dto';

@Controller('taksscategoria')
export class TaksscategoriaController {
  constructor(private readonly taksscategoriaService: TaksscategoriaService) {}

  @Post()
  create(@Body() createTaksscategoriaDto: CreateTaksscategoriaDto) {
    return this.taksscategoriaService.create(createTaksscategoriaDto);
  }

  @Get()
  findAll() {
    return this.taksscategoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taksscategoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaksscategoriaDto: UpdateTaksscategoriaDto) {
    return this.taksscategoriaService.update(+id, updateTaksscategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taksscategoriaService.remove(+id);
  }
}
