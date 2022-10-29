import { Fragment, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ILocation } from '../../types/GeoLocationResponse';
import styles from './styles.module.scss';

interface Props {
  isp?: string;
  userIpAddress?: string;
  autonomousSystem?: string;
  location?: ILocation;
  isLoading: boolean;
}

export const GeoLocationInformation = memo<Props>(
  ({ isp, userIpAddress, location, isLoading }) => {
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
        value: `UTC ${location?.timezone}`,
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
                {isLoading ? (
                  <Skeleton
                    className={styles.skeletonLoaderMain}
                    containerClassName={styles.skeletonLoader}
                  />
                ) : (
                  <span>{value}</span>
                )}
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
