// Cities we visit for setup and home safety visits, grouped by county.
// Austin confirmed Oct 26, 2026: all of metro Denver. Cities that cross county lines are listed once.
export const serviceCounties: { county: string; cities: string[] }[] = [
  { county: "Denver", cities: ["Denver"] },
  { county: "Adams County", cities: ["Thornton", "Westminster", "Northglenn", "Commerce City", "Brighton", "Federal Heights"] },
  { county: "Arapahoe County", cities: ["Aurora", "Centennial", "Englewood", "Littleton", "Greenwood Village", "Cherry Hills Village", "Sheridan", "Glendale"] },
  { county: "Jefferson County", cities: ["Lakewood", "Arvada", "Wheat Ridge", "Golden", "Edgewater", "Evergreen", "Morrison"] },
  { county: "Douglas County", cities: ["Highlands Ranch", "Parker", "Castle Rock", "Lone Tree", "Castle Pines"] },
  { county: "Broomfield", cities: ["Broomfield"] },
  { county: "Boulder County", cities: ["Boulder", "Longmont", "Louisville", "Lafayette", "Superior", "Erie"] },
];

export const serviceCities = serviceCounties.flatMap((c) => c.cities);
