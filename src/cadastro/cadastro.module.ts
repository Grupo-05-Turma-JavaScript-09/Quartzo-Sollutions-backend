import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadastro } from './entities/cadastro.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Cadastro])],
  providers: [],
  controllers: [],
  exports: [],
})
export class CadastroModule {}
