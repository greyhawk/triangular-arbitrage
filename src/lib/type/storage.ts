import { ITriangle } from './trading';

export interface IStorage {
  // 候选者
  candidates: ITriangle[];
  trading: {
    // 套利队列
    queue: any[];
    //套利中的队列
    active: any[];
  };
}

export interface IRank {
  stepA: string;
  stepB: string;
  stepC: string;
  rate: string;
  fee: string[];
  profitRate: string[];
  ts: number;
}