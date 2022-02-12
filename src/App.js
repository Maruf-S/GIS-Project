import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9ubnkxMjE5IiwiYSI6ImNreWJrOHN6NzBnYTkyeHBidTJvbzc3djIifQ.dD45OEbJ0PhwHiZeer_jAA';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(38.7578);
  const [lat, setLat] = useState(8.9806);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('load', () => {
      // Add an image to use as a custom marker
      map.current.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          map.current.addImage('custom-marker', image);
          // Add a GeoJSON source with 2 points
          map.current.addSource('points', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  // feature for Mapbox DC
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [
                      38.79513, 8.99029
                    ]
                  },
                  'properties': {
                    'title': 'Bole Awash Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.76080, 9.01708]
                  },
                  'properties': {
                    'title': 'Meskel Square Dashen Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.76080, 9.01708]
                  },
                  'properties': {
                    'title': 'ATM Dashen Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.77350528695837, 9.033868896141167]
                  },
                  'properties': {
                    'title': 'ATM Commercial Bank of Ethiopia'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.754878908369925, 9.035396120747775]
                  },
                  'properties': {
                    'title': 'Nib Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.723636648083804, 9.014882775586445]
                  },
                  'properties': {
                    'title': 'Tor Hayloch ATM Dashen Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.698312672117964, 9.051416364866553]
                  },
                  'properties': {
                    'title': 'Golagol CBE ATM'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.769555650100784, 9.017341157409701]
                  },
                  'properties': {
                    'title': 'Nib Bank ATM'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.71874146621587, 9.069643322204712]
                  },
                  'properties': {
                    'title': 'Shegole Awash Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.76080, 9.01708]
                  },
                  'properties': {
                    'title': 'ATM Dashen Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.71615, 9.05789]
                  },
                  'properties': {
                    'title': 'Petros Oromia Bank'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.68042, 9.00972]
                  },
                  'properties': {
                    'title': 'Alem Bank Square'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.73295, 8.93069]
                  },
                  'properties': {
                    'title': 'Sefere Square NBE'
                  }
                },
                {
                  // feature for Mapbox SF
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [38.71887, 8.96054]
                  },
                  'properties': {
                    'title': 'St. Mary CBE Bank'
                  }
                },
              ]
            }
          });

          // Add a symbol layer
          map.current.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'points',
            'layout': {
              'icon-image': 'custom-marker',
              // get the title name from the source's "title" property
              'text-field': ['get', 'title'],
              'text-font': [
                'Open Sans Semibold',
                'Arial Unicode MS Bold'
              ],
              'text-offset': [0, 1.25],
              'text-anchor': 'top'
            }
          });
        }
      );
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
