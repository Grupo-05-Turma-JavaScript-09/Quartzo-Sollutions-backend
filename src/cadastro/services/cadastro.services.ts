import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cadastro } from '../entities/cadastro.entity';

@Injectable()
export class CadastroService {
  constructor(
    @InjectRepository(Cadastro)
    private readonly cadastroRepository: Repository<Cadastro>,
  ) {}

  async findAll(): Promise<Cadastro[]> {
    return await this.cadastroRepository.find();
  }

  async findById(id: number): Promise<Cadastro> {
    const funcionario = await this.cadastroRepository.findOne({
      where: { id },
    });

    if (!funcionario) {
      throw new NotFoundException(`Funcionário com ID ${id} não encontrado`);
    }

    return funcionario;
  }

  async create(cadastro: Cadastro): Promise<Cadastro> {
    return await this.cadastroRepository.save(cadastro);
  }

  async update(id: number, cadastro: Cadastro): Promise<Cadastro> {
    const funcionario = await this.findById(id);

    return await this.cadastroRepository.save({
      ...funcionario,
      ...cadastro,
    });
  }

  async delete(id: number): Promise<void> {
    const funcionario = await this.findById(id);
    await this.cadastroRepository.remove(funcionario);
  }

  async findByMatricula(matricula: string): Promise<Cadastro> {
    const funcionario = await this.cadastroRepository.findOne({
      where: { matricula },
    });

    if (!funcionario) {
      throw new NotFoundException(
        `Funcionário com matrícula ${matricula} não encontrado`,
      );
    }

    return funcionario;
  }
}
