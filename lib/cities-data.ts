export interface City {
  id: string
  name: string
  nameWithoutAccents: string
  region: string
  nearbyCity: string
  coordinates: { lat: number; lng: number }
  slug: string
}

export const cities: City[] = [
  {
    id: 'villefranche',
    name: 'Villefranche-sur-Saône',
    nameWithoutAccents: 'Villefranche-sur-Saone',
    region: 'Rhône (69)',
    nearbyCity: 'Caluire',
    coordinates: { lat: 45.989, lng: 4.717 },
    slug: 'villefranche-sur-saone',
  },
  {
    id: 'caluire',
    name: 'Caluire-et-Cuire',
    nameWithoutAccents: 'Caluire-et-Cuire',
    region: 'Rhône (69)',
    nearbyCity: 'Lyon',
    coordinates: { lat: 45.819, lng: 4.872 },
    slug: 'caluire-et-cuire',
  },
  {
    id: 'limonest',
    name: 'Limonest',
    nameWithoutAccents: 'Limonest',
    region: 'Rhône (69)',
    nearbyCity: 'Lyon',
    coordinates: { lat: 45.828, lng: 4.738 },
    slug: 'limonest',
  },
  {
    id: 'trevoux',
    name: 'Trévoux',
    nameWithoutAccents: 'Trevoux',
    region: 'Ain (01)',
    nearbyCity: 'Villefranche-sur-Saône',
    coordinates: { lat: 46.169, lng: 5.020 },
    slug: 'trevoux',
  },
  {
    id: 'lozanne',
    name: 'Lozanne',
    nameWithoutAccents: 'Lozanne',
    region: 'Rhône (69)',
    nearbyCity: 'Villefranche-sur-Saône',
    coordinates: { lat: 46.138, lng: 4.668 },
    slug: 'lozanne',
  },
  {
    id: 'belleville',
    name: 'Belleville-en-Beaujolais',
    nameWithoutAccents: 'Belleville-en-Beaujolais',
    region: 'Rhône (69)',
    nearbyCity: 'Villefranche-sur-Saône',
    coordinates: { lat: 46.218, lng: 4.747 },
    slug: 'belleville-en-beaujolais',
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug)
}
