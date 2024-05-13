import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TakssstatussService } from './takssstatuss.service';
import { CreateTakssstatussDto } from './dto/create-takssstatuss.dto';
import { UpdateTakssstatussDto } from './dto/update-takssstatuss.dto';

@Controller('takssstatuss')
export class TakssstatussController {
  constructor(private readonly takssstatussService: TakssstatussService) {}

  @Post()
  create(@Body() createTakssstatussDto: CreateTakssstatussDto) {
    return this.takssstatussService.create(createTakssstatussDto);
  }

  @Get()
  findAll() {
    return this.takssstatussService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.takssstatussService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTakssstatussDto: UpdateTakssstatussDto) {
    return this.takssstatussService.update(+id, updateTakssstatussDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.takssstatussService.remove(+id);
  }
}
