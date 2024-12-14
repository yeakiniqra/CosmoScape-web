const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

export async function getAPOD() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch APOD data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching APOD:', error);
    throw error;
  }
}

export async function getMarsPhotos(sol = 1000) {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch Mars photos');
    }
    const result = await response.json();

    return result.photos || [];
  } catch (error) {
    console.error('Error fetching Mars photos:', error);
    throw error;
  }
}

export async function getEarthImagery() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export async function getEPIC() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/EPIC/api/natural?api_key=${NASA_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch EPIC data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching EPIC data:', error);
    throw error;
  }
}