import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Coordinates } from '../../../types/coordinates';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const MAP_WIDTH = '100%';
const MAP_HEIGHT = '100%';
const DEFAULT_MAP_ZOOM = 16;
const MAP_CENTER: Coordinates = [59.968296, 30.317632];

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(): JSX.Element {
  return (
    <MapContainer style={{ width: MAP_WIDTH, height: MAP_HEIGHT }} center={MAP_CENTER} zoom={DEFAULT_MAP_ZOOM} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={MAP_CENTER} icon={defaultIcon} />
    </MapContainer>
  );
}

export default Map;
