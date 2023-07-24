const GOOGLE_API_KEY = "AIzaSyCnwFu5BnM7zfiMclrZE_jm3hm6TNwo1F8";
export function getMapPrewiev(lat, lng) {
  const imagePrewievUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePrewievUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const respone = await fetch(url);
  if (!respone.ok) {
    throw new Error("Faild to fetch address!");
  }

  const data = await respone.json();
  const address = data.results[0].formatted_address;
  return address;
}
