import { PartialType } from '@nestjs/mapped-types';
import { CreateTaksscategoriaDto } from './create-taksscategoria.dto';

export class UpdateTaksscategoriaDto extends PartialType(CreateTaksscategoriaDto) {}
