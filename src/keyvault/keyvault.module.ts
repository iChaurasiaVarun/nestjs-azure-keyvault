import { Module } from '@nestjs/common';
import { KeyVaultService } from './keyvault.service';

/**
 * KeyVault Module
 * @export
 * @class KeyVaultModule
 */
@Module({
  providers: [KeyVaultService],
  exports: [KeyVaultService]
})
export class KeyVaultModule {}
