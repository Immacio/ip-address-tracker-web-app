import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './styles.module.scss';
import backgroundImg from '../../assets/images/pattern-bg.png';
import { GeoLocationInformation, InputField } from '../../components';
import { useFetchGeoLocationData } from '../../api/hooks';

const Home = (): JSX.Element => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const {
    query: { isLoading, isRefetching, refetch },
    isp,
    userIpAddress,
    location,
  } = useFetchGeoLocationData(ipAddress);

  const mapPosition: number[] = [location?.lat as number, location?.lng as number];

  return (
    <main className={styles.container}>
      <section className={styles.headerContainer}>
        <img src={backgroundImg} alt="" />
        <div className={styles.headerContainerContent}>
          <h1>IP Address Tracker</h1>
          <InputField
            onClick={refetch}
            setInputValue={setIpAddress}
            placeholder="Search for any IP address or domain"
          />
          <GeoLocationInformation
            isLoading={isLoading}
            isRefetching={isRefetching}
            userIpAddress={userIpAddress}
            location={location}
            isp={isp}
          />
        </div>
      </section>
      {/* <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup.
          </Popup>
        </Marker>
      </MapContainer> */}
    </main>
  );
};

export default Home;
