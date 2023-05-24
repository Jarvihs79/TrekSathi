import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import fortIcon from '../utils/fort.png';

const Map = () => {
  const [selectedFort, setSelectedFort] = useState(null);

  useEffect(() => {
    const map = L.map('map').setView([18.520430, 73.856743], 9);

    const fortMarkerIcon = L.icon({
      iconUrl: fortIcon,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    const markerData = [
      {
        coordinates: [18.365143, 73.755219],
        tooltip: '<strong>Name:</strong> Sinhgad',
        blog: `Sinhgad Fort: A Majestic Citadel with Rich History and Scenic Beauty

Located atop a steep cliff in the Sahyadri mountain range of Maharashtra, Sinhgad Fort is a historical marvel that offers a captivating glimpse into the past. With its breathtaking panoramic views, intriguing legends, and nearby attractions, this fort is a must-visit destination for history enthusiasts and nature lovers alike.

<strong>Historical Facts:</strong>

Sinhgad Fort, formerly known as Kondana Fort, holds great significance in Indian history. It was initially built by the Koli tribal people and later fortified by various rulers, including the Marathas. The fort witnessed several battles and was a strategic stronghold due to its location. One of the notable incidents in the fort's history is the heroic defense led by Tanaji Malusare during the Battle of Sinhgad in 1670. His sacrifice and bravery are commemorated till this day.

<strong>Information:</strong>

Sinhgad Fort stands at an elevation of approximately 1,300 meters and covers an area of about 13 hectares. It is situated around 25 kilometers southwest of Pune city in Maharashtra, India. The fort can be accessed by a scenic drive or a trek through picturesque trails. The best time to visit is during the monsoon season when the surroundings come alive with lush greenery and cascading waterfalls.

<strong>Nearby Attractions:</strong>

1. Khadakwasla Dam: Located near Sinhgad Fort, Khadakwasla Dam is a popular tourist spot known for its serene ambiance and boating facilities.

2. Panshet Dam: Another nearby attraction is Panshet Dam, which offers splendid views and opportunities for water sports like kayaking and jet skiing.

3. Torna Fort: Adventure enthusiasts can explore Torna Fort, situated in close proximity to Sinhgad. It is one of the highest forts in Maharashtra and offers challenging trekking routes.

4. Rajgad Fort: History buffs can visit Rajgad Fort, known for its historical significance and architectural brilliance. It served as the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj.

<strong>Trail Routes to the Fort:</strong>

1. Pune Municipal Transport (PMT) buses are available from Pune city to the base village of Sinhgad Fort. From there, visitors can embark on a scenic trek that takes approximately 1.5 to 2 hours to reach the fort.

2. For those who prefer a shorter and easier route, private vehicles can be taken to the top of the fort. However, the adventurous trekking path is highly recommended for a memorable experience.

3. There are also local guides and trekking groups that organize guided tours to Sinhgad Fort, providing insights into its history and significance while ensuring a safe and enjoyable journey.

Visiting Sinhgad Fort is not only an opportunity to delve into the region's rich history but also a chance to connect with nature and soak in the picturesque surroundings. The fort's imposing structure, ancient ruins, and scenic beauty make it an ideal destination for a day trip or a weekend getaway. Plan your visit to Sinhgad Fort and embark on an unforgettable journey through time and nature.`
      },
      {
        coordinates: [18.281, 73.976],
        tooltip: '<strong>Name:</strong> Purandar',
        blog: `Purandar Fort: A Historic Gem with Majestic Views

Perched on a hill in the Western Ghats, Purandar Fort is a significant historical site known for its captivating architecture and panoramic vistas. This fort offers a fascinating glimpse into the region's history and serves as a popular attraction for adventure seekers and history enthusiasts.

<strong>Historical Facts:</strong>
Purandar Fort holds great historical importance and has witnessed numerous battles and conquests throughout its existence. It was built during the reign of the Yadava dynasty and later came under the control of the Bahmani Sultanate and the Marathas. The fort played a crucial role in the defense of the region and was considered strategically significant.

<strong>Information:</strong>
Situated approximately 40 kilometers southeast of Pune in Maharashtra, India, Purandar Fort stands at an elevation of around 1,387 meters. The fort covers a vast area and offers panoramic views of the surrounding countryside. Visitors can explore the fort's various structures, including bastions, gates, and palaces, which reflect the architectural brilliance of the bygone era.

<strong>Nearby Attractions:</strong>
1. Vajragad (also known as Rudramal): Located near Purandar Fort, Vajragad is another fort that offers scenic views and an adventurous trekking experience.
2. Narayanpur: This village near Purandar Fort is known for its ancient temples and offers a glimpse into the region's cultural heritage.

<strong>Trail Routes to the Fort:</strong>
1. There are multiple trekking routes to reach Purandar Fort, including the Saswad-Kapurhol route and the Purandar-Wadki route. These routes provide scenic views and are suitable for both beginners and experienced trekkers.
2. Private vehicles can be taken to the foothills of the fort, followed by a trek to the top. The trekking path is well-marked and offers beautiful vistas along the way.

A visit to Purandar Fort offers not only an opportunity to explore the historical significance of the region but also a chance to immerse yourself in the natural beauty of the surrounding landscape. The fort's impressive architecture, breathtaking views, and the sense of adventure it offers make it a must-visit destination for history and nature enthusiasts. Plan your visit to Purandar Fort and embark on a memorable journey through time and nature.`
      },
      {
        coordinates: [18.376, 73.542],
        tooltip: '<strong>Name:</strong> Tikona',
        blog: 'Tikona Fort:\n- Location: Coordinates [18.376, 73.542]\n- Historical Facts: Built during the Maratha Empire, played a strategic role.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.693, 73.426],
        tooltip: '<strong>Name:</strong> Lohagad',
        blog: 'Lohagad Fort:\n- Location: Coordinates [18.693, 73.426]\n- Historical Facts: Witnessed battles and strategic maneuvers, significant in Maratha and Mughal history.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.676, 73.538],
        tooltip: '<strong>Name:</strong> Tung',
        blog: 'Tung Fort:\n- Location: Coordinates [18.676, 73.538]\n- Historical Facts: Historical importance during the Maratha rule.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.162, 73.666],
        tooltip: '<strong>Name:</strong> Rohida',
        blog: 'Rohida Fort:\n- Location: Coordinates [18.162, 73.666]\n- Historical Facts: Built by the Bahamani Sultanate, later captured by Marathas.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.275, 73.521],
        tooltip: '<strong>Name:</strong> Torna',
        blog: 'Torna Fort:\n- Location: Coordinates [18.275, 73.521]\n- Historical Facts: One of the earliest forts captured by Shivaji Maharaj.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.144, 73.935],
        tooltip: '<strong>Name:</strong> Kenjalgad',
        blog: 'Kenjalgad Fort:\n- Location: Coordinates [18.144, 73.935]\n- Historical Facts: Built during the Maratha period, strategic importance.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.381, 73.669],
        tooltip: '<strong>Name:</strong> Korigad',
        blog: 'Korigad Fort:\n- Location: Coordinates [18.381, 73.669]\n- Historical Facts: Captured by Shivaji Maharaj, later fortified by the British.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [19.211, 73.860],
        tooltip: '<strong>Name:</strong> Shivneri',
        blog: 'Shivneri Fort:\n- Location: Coordinates [19.211, 73.860]\n- Historical Facts: Birthplace of Shivaji Maharaj significant in Maratha history',
      
      
      },
      {
        coordinates: [18.231, 73.404],
        tooltip: '<strong>Name:</strong> Raigad',
        blog: 'Raigad Fort:\n- Location: Coordinates [18.231, 73.404]\n- Historical Facts: Former capital of the Maratha Empire, important historical site.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [17.923, 73.524],
        tooltip: '<strong>Name:</strong> Pratapgad',
        blog: 'Pratapgad Fort:\n- Location: Coordinates [17.923, 73.524]\n- Historical Facts: Witnessed the Battle of Pratapgad, fought between the Marathas and the Mughals.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.825, 73.330],
        tooltip: '<strong>Name:</strong> Rajmachi',
        blog: 'Rajmachi Fort:\n- Location: Coordinates [18.825, 73.330]\n- Historical Facts: Strategic fortresses built by Shivaji Maharaj.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [17.385, 73.669],
        tooltip: '<strong>Name:</strong> Rajgarh',
        blog: 'Rajgarh Fort:\n- Location: Coordinates [17.385, 73.669]\n- Historical Facts: Known as the "King of forts," built by Shivaji Maharaj.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [19.426, 73.769],
        tooltip: '<strong>Name:</strong> Harishchandragad',
        blog: 'Harishchandragad Fort:\n- Location: Coordinates [19.426, 73.769]\n- Historical Facts: Ancient fort with caves, temples, and panoramic views.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [16.838, 74.300],
        tooltip: '<strong>Name:</strong> Panhala Fort',
        blog: 'Panhala Fort:\n- Location: Coordinates [16.838, 74.300]\n- Historical Facts: Important fort during the Maratha Empire, offers scenic views.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [16.705, 74.195],
        tooltip: '<strong>Name:</strong> Vishalgad Fort',
        blog: 'Vishalgad Fort:\n- Location: Coordinates [16.705, 74.195]\n- Historical Facts: Strategic fort built during the Maratha rule.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [16.763,
      
       74.020],
        tooltip: '<strong>Name:</strong> Bhudargad Fort',
        blog: 'Bhudargad Fort:\n- Location: Coordinates [16.763, 74.020]\n- Historical Facts: Ancient fort known for its historical significance.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [16.814, 73.886],
        tooltip: '<strong>Name:</strong> Kalanandigad Fort',
        blog: 'Kalanandigad Fort:\n- Location: Coordinates [16.814, 73.886]\n- Historical Facts: Historic fort with scenic surroundings.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.908, 72.939],
        tooltip: '<strong>Name:</strong> Janjira Fort',
        blog: 'Janjira Fort:\n- Location: Coordinates [18.908, 72.939]\n- Historical Facts: Impressive sea fort near the Arabian Sea coast.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.924, 72.831],
        tooltip: '<strong>Name:</strong> Colaba Fort',
        blog: 'Colaba Fort:\n- Location: Coordinates [18.924, 72.831]\n- Historical Facts: Historic fort located in Colaba, Mumbai.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.995, 72.807],
        tooltip: '<strong>Name:</strong> Worli Fort',
        blog: 'Worli Fort:\n- Location: Coordinates [18.995, 72.807]\n- Historical Facts: Coastal fort built by the British in Mumbai.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.047, 72.875],
        tooltip: '<strong>Name:</strong> Sindhudurg Fort',
        blog: 'Sindhudurg Fort:\n- Location: Coordinates [18.047, 72.875]\n- Historical Facts: Sea fort built by Shivaji Maharaj, popular tourist spot.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [15.864, 73.523],
        tooltip: '<strong>Name:</strong> Chapora Fort',
        blog: 'Chapora Fort:\n- Location: Coordinates [15.864, 73.523]\n- Historical Facts: Coastal fort known for its picturesque surroundings.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [15.741, 73.707],
        tooltip: '<strong>Name:</strong> Aguada Fort',
        blog: 'Aguada Fort:\n- Location: Coordinates [15.741, 73.707]\n- Historical Facts: Well-preserved Portuguese fort, famous for its lighthouse.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions'
      
      
      },
      {
        coordinates: [15.602, 73.785],
        tooltip: '<strong>Name:</strong> Reis Magos Fort',
        blog: 'Reis Magos Fort:\n- Location: Coordinates [15.602, 73.785]\n- Historical Facts: Historic fort offering scenic views of the river and surroundings.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [15.555, 73.736],
        tooltip: '<strong>Name:</strong> Cabo de Rama Fort',
        blog: 'Cabo de Rama Fort:\n- Location: Coordinates [15.555, 73.736]\n- Historical Facts: Ancient fort with a rich history and panoramic views.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [18.446, 72.824],
        tooltip: '<strong>Name:</strong> Bandra Fort',
        blog: 'Bandra Fort:\n- Location: Coordinates [18.446, 72.824]\n- Historical Facts: Coastal fort in Bandra, Mumbai, offering views of the Arabian Sea.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      },
      {
        coordinates: [19.048, 72.817],
        tooltip: '<strong>Name:</strong> Arnala Fort',
        blog: 'Arnala Fort:\n- Location: Coordinates [19.048, 72.817]\n- Historical Facts: Island fort with a rich history and scenic surroundings.\n- Information: Elevation, area, and access details unavailable.\n- Nearby Attractions: Not specified.\n- Trail Routes: Not specified.',
      }
      // Add more forts with their coordinates, tooltip messages, and blog content
    ];

    markerData.forEach((marker) => {
      const { coordinates, tooltip, blog } = marker;
      const fortMarker = L.marker(coordinates, { icon: fortMarkerIcon }).addTo(map);
      fortMarker.bindTooltip(tooltip);
      fortMarker.on('click', () => setSelectedFort(blog));
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="my-4">Custom Map Representing the Popular Forts of Maharashtra</h1>
      <div id="map" className="my-4" style={{ height: '400px' }}></div>
      <h1 className="my-4">Click on the fort to know more about it</h1>

      {selectedFort && (
        <div className="card bg-light text-dark mb-4">
          <div className="card-header bg-dark text-light">
            <h5 className="card-title">Fort Details</h5>
          </div>
          <div className="card-body">
            <p className="card-text" dangerouslySetInnerHTML={{ __html: selectedFort }}></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
