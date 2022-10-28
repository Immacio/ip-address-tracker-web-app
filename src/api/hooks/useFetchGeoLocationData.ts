import { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { fetchGeoLocationData } from '..';
import {
  IAutonomousSystem,
  IGeoLocationResponse,
  ILocation,
} from '../../types/GeoLocationResponse';

export const useFetchGeoLocationData = (
  ipAddress: string,
): {
  query: UseQueryResult<IGeoLocationResponse, unknown>;
  userIpAddress: string | undefined;
  isp: string | undefined;
  autonomousSystem: IAutonomousSystem | undefined;
  location: ILocation | undefined;
} => {
  const query = useQuery('useFetchGeoLocationData', () => fetchGeoLocationData(ipAddress), {
    onSuccess: (res: IGeoLocationResponse) => {
      const data = res;

      return data;
    },
    onError: (err: unknown) => err,
    staleTime: Infinity,
  });

  const userIpAddress = useMemo(() => query.data?.ip, [query.data]);

  const isp = useMemo(() => query.data?.isp, [query.data]);

  const autonomousSystem = useMemo(() => query.data?.as, [query.data]);

  const location = useMemo(() => query.data?.location, [query.data]);

  return { query, userIpAddress, isp, autonomousSystem, location };
};

export default useFetchGeoLocationData;
