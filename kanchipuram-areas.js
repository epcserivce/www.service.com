// kanchipuram-areas.js
const KANCHIPURAM_DISTRICT_AREAS = [
  { area: "Kanchipuram Town", pincode: "631501", center: [12.8342, 79.7036] },
  { area: "Kanchipuram South", pincode: "631502", center: [12.8250, 79.7000] },
  { area: "Sriperumbudur", pincode: "602105", center: [12.9691, 79.9403] },
  { area: "Walajabad", pincode: "631605", center: [12.7963, 79.8164] },
  { area: "Uttiramerur", pincode: "603406", center: [12.6148, 79.7562] },
  { area: "Kundrathur", pincode: "600069", center: [12.9977, 80.0972] },
  { area: "Sunguvarchatram", pincode: "602106", center: [12.9360, 79.8510] },
  { area: "Oragadam", pincode: "602105", center: [12.8398, 79.9490] }
];

// Haversine Formula for Distance Calculation (in Kilometers)
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in KM
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in KM
}