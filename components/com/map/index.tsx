"use client";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Wrapper } from "./style";
import { Spinner } from "@nextui-org/react";
import { isMobile } from "react-device-detect";
export const LoadingContainer = () => (
  <Spinner label="Cargando..." color="primary" size="lg" />
);

const GoogleMap = ({ lat, lng, height, width }: any) => {
  if (isMobile) return null;
  return (
    <Wrapper>
      <Map
        google={window.google}
        zoom={17}
        style={{ height, width }}
        initialCenter={{
          lat,
          lng,
        }}
      >
        <Marker
          position={{
            lat,
            lng,
          }}
        />
      </Map>
    </Wrapper>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBbsQSRn1eit85DvTMfTFR07HYMbjVkzqA",
  LoadingContainer: LoadingContainer,
})(GoogleMap);
