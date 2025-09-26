import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroModule } from './cadastro/cadastro.module';
import { Cadastro } from './cadastro/entities/cadastro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rh',
      entities: [Cadastro],
      synchronize: true,
      logging: true,
    }),
    CadastroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
