import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Cadastro } from '../entities/cadastro.entity';
import { CadastroService } from '../services/cadastro.services';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  @Get()
  async findAll(): Promise<Cadastro[]> {
    return await this.cadastroService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Cadastro> {
    return await this.cadastroService.findById(id);
  }

  @Get('matricula/:matricula')
  async findByMatricula(
    @Param('matricula') matricula: string,
  ): Promise<Cadastro> {
    return await this.cadastroService.findByMatricula(matricula);
  }

  @Post()
  async create(@Body() cadastro: Cadastro): Promise<Cadastro> {
    return await this.cadastroService.create(cadastro);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() cadastro: Cadastro,
  ): Promise<Cadastro> {
    return await this.cadastroService.update(id, cadastro);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.cadastroService.delete(id);
  }
}
