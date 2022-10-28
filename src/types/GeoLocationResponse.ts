import { Country } from './Country';

export type IAutonomousSystemType =
  | 'Cable/DSL/ISP'
  | 'Content'
  | 'Educational/Research'
  | 'Enterprise'
  | 'Non-Profit'
  | 'Not Disclosed'
  | 'NSP'
  | 'Route Server';

export interface IAutonomousSystem {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: IAutonomousSystemType | undefined;
}

export interface ILocation {
  country: Country;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geoNameId?: number;
}

export interface IGeoLocationResponse {
  ip: string;
  location: ILocation;
  domains?: string[];
  as?: IAutonomousSystem;
  isp: string;
}
