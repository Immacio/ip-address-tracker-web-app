import { SampleResponse } from '../types';
import { IGeoLocationResponse } from '../types/GeoLocationResponse';
import Config from '../Config';
import axios from './axios';

export const fetchSample = (): Promise<SampleResponse> =>
  axios
    .get('/')
    .then((res) => ({
      status: res.status,
      data: res.data,
      error: null,
    }))
    .catch((err) => ({
      status: err.response.status,
      error: err.response.data,
      data: null,
    }));

export const postSample = (name: string, result: string): Promise<SampleResponse> =>
  axios
    .post('/', { name, result })
    .then((res) => ({
      status: res.status,
      data: res.data,
      error: null,
    }))
    .catch((err) => ({
      status: err.response.status,
      error: err.response.data,
      data: null,
    }));

export const fetchGeoLocationData = (ipAddress: string): Promise<IGeoLocationResponse> =>
  axios
    .get(`/api/v2/country,city?apiKey=${Config.apiKey}&ipAddress=${ipAddress}`)
    .then(({ data }) => data);
