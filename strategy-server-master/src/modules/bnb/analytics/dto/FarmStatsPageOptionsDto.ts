import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { PageOptionsDto } from 'src/common/dto/PageOptionsDto';
import { strToPgIsoDate } from 'src/common/transform-fns/str-to-pg-iso-date';

export class FarmStatsPageOptionsDto extends PageOptionsDto {
  @ApiPropertyOptional()
  @IsString()
  @Transform(strToPgIsoDate)
  @IsOptional()
  createdAtFrom?: Date;

  @ApiPropertyOptional()
  @IsString()
  @Transform(strToPgIsoDate)
  @IsOptional()
  createdAtTo?: Date;
}
