import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { IsString, IsNumber, Min, Max, MinLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsNumber()
  @Min(0)
  @Max(200) // Update this if 200 is a legitimate score
  mark: number;
}

@Controller('students')
export class StudentController {
  constructor(private service: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() data: CreateStudentDto): Promise<Student> {
    return this.service.create(data);
  }
}
