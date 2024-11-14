export interface CryptocurrencyChange {
  symbol: string;
  price: string;
  timestamp: Date;
  action: CryptocurrencyAction;
}

export type CryptocurrencyAction = 'INCREASE' | 'DECREASE' | 'NO_CHANGE';
