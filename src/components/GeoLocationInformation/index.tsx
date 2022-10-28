import { Fragment, memo } from 'react';
import { ILocation } from '../../types/GeoLocationResponse';
import styles from './styles.module.scss';

interface Props {
  isp?: string;
  userIpAddress?: string;
  autonomousSystem?: string;
  location?: ILocation;
  isLoading: boolean;
  isRefetching: boolean;
}

export const GeoLocationInformation = memo<Props>(
  ({ isp, userIpAddress, location, isLoading, isRefetching }) => {
    const geoLocationData: {
      title: string;
      value: string | undefined;
    }[] = [
      {
        title: 'IP Address',
        value: userIpAddress,
      },
      {
        title: 'Location',
        value: location?.city,
      },
      {
        title: 'Timezone',
        value: location?.timezone,
      },
      {
        title: 'ISP',
        value: isp,
      },
    ];

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {geoLocationData.map(({ title, value }, index) => (
            <Fragment key={title}>
              <div className={styles.infoContainer}>
                <h1>{title}</h1>
                <span>{value}</span>
              </div>
              {index !== geoLocationData.length - 1 && <div className={styles.divider} />}
            </Fragment>
          ))}
        </div>
      </div>
    );
  },
);

GeoLocationInformation.displayName = 'GeoLocationInformation';

export default GeoLocationInformation;
