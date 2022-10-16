import { PartialType } from '@nestjs/swagger';
import { createCategoryDto } from './create-category.dto';

export class updateCategoryDto extends PartialType(createCategoryDto) {}
