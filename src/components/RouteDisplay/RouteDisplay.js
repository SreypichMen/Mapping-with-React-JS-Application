import React from 'react';
import { Polyline } from 'react-leaflet';

const RouteDisplay = ({ routes }) => {
  return (
    <>
      {routes.map((route, index) => (
        <Polyline key={index} positions={route.coordinates} color={`hsl(${index * 70 % 360}, 70%, 50%)`} />
      ))}
    </>
  );
};

export default RouteDisplay;
