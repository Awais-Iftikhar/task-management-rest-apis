import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  TASK_API_DESCRIPTIONS,
  TASK_STATUS_VALUES,
} from '../constants/task-api.constants';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiPropertyOptional(TASK_API_DESCRIPTIONS.TITLE)
  title?: string;

  @ApiPropertyOptional(TASK_API_DESCRIPTIONS.DESCRIPTION)
  description?: string;

  @ApiPropertyOptional(TASK_API_DESCRIPTIONS.STATUS)
  status?: TASK_STATUS_VALUES;
}
