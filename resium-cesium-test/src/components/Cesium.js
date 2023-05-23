
import { Cesium3DTileset,  Viewer } from 'resium'
import * as cesium from 'cesium';
import { useRef } from "react";

export default function Cesium() {
  const ref =useRef(null)
    const tms = new cesium.UrlTemplateImageryProvider({
      url: cesium.buildModuleUrl('Assets/Textures/land_shallow_topo_east.tif'),
      // url : cesium.buildModuleUrl('Assets/Textures/NaturalEarthII') + '/{z}/{x}/{reverseY}.jpg',
      maximumLevel : 1
  });
  return (
<Viewer 
    ref={ref}
    baseLayerPicker={ false }
    geocoder={ false }
    imageryProvider={ tms }
    full={ false }
    homeButton={ false }
    fullscreenButton={ false }
    vrButton={ false }
    infoBox={ false }
    navigationHelpButton={ false }
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      <Cesium3DTileset
      url={cesium.buildModuleUrl('Assets/CesiumWinter/tileset.json')}
      onReady={tileset => {if(tileset){ ref.current?.cesiumElement?.zoomTo(tileset);}}}
      />
    </Viewer>
  )
}