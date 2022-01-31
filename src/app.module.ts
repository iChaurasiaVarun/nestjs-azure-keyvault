import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeyVaultModule } from './keyvault/keyvault.module';

@Module({
  imports: [KeyVaultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
