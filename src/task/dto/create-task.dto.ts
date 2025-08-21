import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNotEmpty, IsEnum } from 'class-validator';
import {
  TASK_API_DESCRIPTIONS,
  TASK_STATUS_VALUES,
} from '../constants/task-api.constants';

export class CreateTaskDto {
  @ApiProperty(TASK_API_DESCRIPTIONS.TITLE)
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty(TASK_API_DESCRIPTIONS.DESCRIPTION)
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty(TASK_API_DESCRIPTIONS.STATUS)
  @IsString()
  @IsNotEmpty()
  @IsEnum(TASK_STATUS_VALUES)
  status: TASK_STATUS_VALUES;
}

export class ParamsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
