import {
  ClientSecretCredential,
  DefaultAzureCredential,
} from '@azure/identity';
import { KeyVaultSecret, SecretClient } from '@azure/keyvault-secrets';
import { Injectable } from '@nestjs/common';

/**
 * Service to handle operation related to Azure key vault
 * @export
 * @class KeyVaultService
 */
@Injectable()
export class KeyVaultService {
  //#region Properties
  vaultUri = '<vault-uri>';
  //#endregion

  /**
   *Method to get secret
   * @param {string} key
   * @return {*}  {Promise<KeyVaultSecret>}
   */
  public async getAsync(key: string): Promise<KeyVaultSecret> {
    return await this.getAzureClient().getSecret(key);
  }

  /**
   *Method to set secret
   * @param {string} key
   * @param {string} value
   * @return {*}  {Promise<KeyVaultSecret>}
   */
  public async setAsync(key: string, value: string): Promise<KeyVaultSecret> {
    return await this.getAzureClient().setSecret(key, value);
  }

  /**
   * Method to create Azure Key Vault client object
   * @private
   * @return {*}  {SecretClient}
   * @memberof KeyVaultService
   */
  private getAzureClient(): SecretClient {
    return new SecretClient(this.vaultUri, new DefaultAzureCredential());
  }

  /**
   * Method to create Azure Key Vault client object using ClientId and ClientSecret
   * @private
   * @param {string} clientId
   * @param {string} clientSecret
   * @param {string} tenantId
   * @return {*}  {SecretClient}
   * @memberof KeyVaultService
   */
  private getAzureClientWithClientIdandClientSecret(
    clientId: string,
    clientSecret: string,
    tenantId: string,
  ): SecretClient {
    return new SecretClient(
      this.vaultUri,
      new ClientSecretCredential(tenantId, clientId, clientSecret),
    );
  }
}
