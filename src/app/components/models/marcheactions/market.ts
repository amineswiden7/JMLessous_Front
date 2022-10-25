import {Referentiel} from './referentiel';
import {Limit} from './limit';

export class Market {
  isin: string;
  caps: number;
  change: number;
  close: number;
  cto: number;
  high: number;
  limit: Limit;
  low: number;
  max: number;
  min: number;
  open: number;
  time: string;
  trVolume: number;
  volume: number;
  vto: number;
  ychange: number;
  referentiel: Referentiel;
  status: string;
  last: number;
}
