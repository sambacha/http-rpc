import * as http from 'http';
import * as https from 'https';

import { HttpProviderBase, JsonRpcResponse } from 'web3-core-helpers';

export interface HttpHeader {
  name: string;
  value: string;
}

export interface HttpProviderAgent {
  baseUrl?: string;
  http?: http.Agent;
  https?: https.Agent;
}

export interface HttpProviderOptions {
  withCredentials?: boolean;
  timeout?: number;
  headers?: HttpHeader[];
  agent?: HttpProviderAgent;
  keepAlive?: boolean;
}

export class HttpProvider extends HttpProviderBase {
  host: string;

  withCredentials: boolean;
  timeout: number;
  headers?: HttpHeader[];
  agent?: HttpProviderAgent;
  connected: boolean;

  constructor(host?: string, options?: HttpProviderOptions);

  send(
    payload: object,
    callback?: (error: Error | null, result: JsonRpcResponse | undefined) => void,
  ): void;
  disconnect(): boolean;
  supportsSubscriptions(): boolean;
}
