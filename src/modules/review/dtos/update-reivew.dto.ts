import { PartialType } from '@nestjs/swagger';
import { createReviewDto } from './create-review.dto';

export class updateReviewDto extends PartialType(createReviewDto) {}
