import { useState } from 'react';
import {
  Button,
  Container,
  Slider,
  styled,
} from '@mui/material';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Layer, Source } from 'react-map-gl';
import mapStyle from '../ign-standard.json';

const ButtonRed = styled(Button)({
  border: '1px solid red',
});

const Home = () => {
  const [opacity, setOpacity] = useState(1);
  const [zoom, setZoom] = useState(11);
  const [R, setR] = useState(128);
  const [G, setG] = useState(128);
  const [B, setB] = useState(128);

  return (
    <Container>
      <Slider
        onChangeCommitted={(event, value) => {
          setOpacity(value / 100);
        }}
      />
      <Slider
        onChange={(event, value) => {
          setR(value);
        }}
        min={0}
        max={255}
        defaultValue={128}
      />
      <Slider
        onChange={(event, value) => {
          setG(value);
        }}
        min={0}
        max={255}
        defaultValue={128}
      />
      <Slider
        onChange={(event, value) => {
          setB(value);
        }}
        min={0}
        max={255}
        defaultValue={128}
      />

      <Map
        initialViewState={{
          longitude: 2,
          latitude: 44,
          zoom,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle={mapStyle}
      >
        <Source
          type="vector"
          minzoom={11}
          maxzoom={11}
          tiles={['https://insee-odl-tiles.netlify.app/filosofi-2017-200m/{z}/{x}/{y}.pbf']}
        >
          <Layer
            type="fill"
            source-layer="custom"
            paint={{
              'fill-opacity': opacity,
              'fill-color': `rgb(${R}, ${G}, ${B})`,
            }}
          />
        </Source>
      </Map>
    </Container>
  );
};

export default Home;
