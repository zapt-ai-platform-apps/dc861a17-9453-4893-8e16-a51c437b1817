import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapComponent = ({ locations, center, zoom = 14, height = "300px" }) => {
  // Create a custom icon
  const customIcon = new Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="map-container" style={{ height }}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location, index) => (
          <Marker 
            key={index} 
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="popup-content">
                <h3 className="font-bold mb-1">{location.name}</h3>
                {location.address && (
                  <p className="text-sm">{location.address}</p>
                )}
                {location.description && (
                  <p className="text-xs mt-1 text-gray-600">{location.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;