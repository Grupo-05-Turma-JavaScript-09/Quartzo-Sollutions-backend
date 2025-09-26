import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadastro } from './entities/cadastro.entity';
import { Module } from '@nestjs/common';
import { CadastroService } from './services/cadastro.services';
import { CadastroController } from './controllers/cadastro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cadastro])],
  providers: [CadastroService],
  controllers: [CadastroController],
  exports: [],
})
export class CadastroModule {}
