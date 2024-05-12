import { PartialType } from '@nestjs/mapped-types';
import { CreateTakssDto } from './create-takss.dto';

export class UpdateTakssDto extends PartialType(CreateTakssDto) {}
