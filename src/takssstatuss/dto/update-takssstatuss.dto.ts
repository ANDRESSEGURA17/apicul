import { PartialType } from '@nestjs/mapped-types';
import { CreateTakssstatussDto } from './create-takssstatuss.dto';

export class UpdateTakssstatussDto extends PartialType(CreateTakssstatussDto) {}
