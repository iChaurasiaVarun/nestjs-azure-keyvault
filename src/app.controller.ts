import { KeyVaultSecret } from '@azure/keyvault-secrets';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { keyvault } from './keyvault/keyvault.model';
import { KeyVaultService } from './keyvault/keyvault.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly keyvaultService: KeyVaultService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('GetSecret/:key')
  getSecret(@Param('key') key: string): Promise<KeyVaultSecret> {
    return this.keyvaultService.getAsync(key);
  }

  @Post('SetSecret')
  setSecret(@Body() keyvaultModel: keyvault): Promise<KeyVaultSecret> {
    return this.keyvaultService.setAsync(
      keyvaultModel.key,
      keyvaultModel.value,
    );
  }
}
