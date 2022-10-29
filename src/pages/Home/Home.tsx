/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import styles from './styles.module.scss';
import backgroundImg from '../../assets/images/pattern-bg.png';
import { GeoLocationInformation, InputField } from '../../components';
import { useFetchGeoLocationData } from '../../api/hooks';
import 'leaflet/dist/leaflet.css';

const Home = (): JSX.Element => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const {
    query: { isLoading, isRefetching, refetch },
    isp,
    userIpAddress,
    location,
  } = useFetchGeoLocationData(ipAddress);

  const pos: [number, number] = [location?.lat ?? 0, location?.lng ?? 0];

  Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  return (
    <main className={styles.container}>
      <section className={styles.headerContainer}>
        <img src={backgroundImg} alt="" />
        <div className={styles.headerContainerContent}>
          <h1>IP Address Tracker</h1>
          <InputField
            onClick={refetch}
            setInputValue={setIpAddress}
            isLoading={isLoading || isRefetching}
            placeholder="Search for any IP address or domain"
          />
          <GeoLocationInformation
            isLoading={isLoading || isRefetching}
            userIpAddress={userIpAddress}
            location={location}
            isp={isp}
          />
        </div>
      </section>
      {isLoading || isRefetching ? null : (
        <div style={{ height: '100vh' }}>
          <MapContainer
            className={styles.mapContainer}
            center={pos}
            zoom={13}
            scrollWheelZoom={false}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={pos}>
              <Popup>
                <h2>
                  Current Location: {location?.city}, {location?.country}
                </h2>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </main>
  );
};

export default Home;
