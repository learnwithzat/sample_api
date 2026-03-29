import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './student.controller';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private repo: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.repo.find({ order: { id: 'DESC' } });
  }

  async create(data: CreateStudentDto): Promise<Student> {
    const student = this.repo.create(data);
    return await this.repo.save(student);
  }
}
