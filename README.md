## Description

[Azure KeyVault](https://azure.microsoft.com/en-in/services/key-vault/) integration with [Nest](https://github.com/nestjs/nest) framework (node.js)

## Before Integration

1. Create a KeyVault account and resource ([read more](https://docs.microsoft.com/en-in/azure/key-vault/general/quick-create-portal))
2. In the [Azure Portal](https://portal.azure.com), go to **Dashboard > Key vaults > _your-keyvault_**.
3. Note down the "keyvault uri" from **Overview** tab.

## Installation of required packages

1. Install the following packages using NPM:

```bash
$ npm i @azure/identity
$ npm i @azure/keyvault-secrets
```

2. Update vault-uri in existing `keyvault.service.ts` file.

> **NOTE: By Default, We are connecting to Azure-Keyvault using default credentials. If we want to connect with ClientId and ClientSecret then we need to call `getAzureClientWithClientIdandClientSecret` method by passing required parameter.**

## Usage

1. Import the `KeyVaultModule`:

```typescript
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
```

2. Inject `KeyVaultService` in constructor of controller/service.

```typescript
constructor(
    private readonly keyvaultService: KeyVaultService,
  ) {}
```
3. Call the following method to fetch/set the secret. 
```typescript
/**
   *Method to get secret
   * @param {string} key
   * @return {*}  {Promise<KeyVaultSecret>}
   */
  public async getAsync(key: string): Promise<KeyVaultSecret> {
    ...
  }
```

```typescript
 /**
   *Method to set secret
   * @param {string} key
   * @param {string} value
   * @return {*}  {Promise<KeyVaultSecret>}
   */
  public async setAsync(key: string, value: string): Promise<KeyVaultSecret> {
    ...
  }
```

## Stay in touch

* Author - [Varun Chaurasia](https://www.linkedin.com/in/varunchaurasia)
* LinkedIn - [https://www.linkedin.com/in/varunchaurasia](https://www.linkedin.com/in/varunchaurasia)
* Git - [iChaurasiaVarun](https://github.com/iChaurasiaVarun)
