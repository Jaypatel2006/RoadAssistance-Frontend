import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [20.5937, 78.9629];
  const position2 = [21.5937, 70.9629];


  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={position2}>
        <Popup>
          hello 
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
