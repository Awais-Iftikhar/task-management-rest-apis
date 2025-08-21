import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
  HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, ParamsDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: HttpStatus.OK, description: 'List of all tasks.' })
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Task ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Task found.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Task not found.' })
  findOne(@Param() { id }: ParamsDto) {
    return this.taskService.findOne(id);
  }
  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Task successfully created.',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request.' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Task ID' })
  @ApiBody({ type: UpdateTaskDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task successfully updated.',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Task not found.' })
  update(@Param() { id }: ParamsDto, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Task ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task successfully deleted.',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Task not found.' })
  remove(@Param() { id }: ParamsDto) {
    return this.taskService.remove(id);
  }
}
