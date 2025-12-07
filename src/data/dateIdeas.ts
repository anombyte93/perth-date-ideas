export interface DateIdea {
  id: string;
  name: string;
  location: string;
  coordinates: string;
  whyGoodForCouples: string;
  duration: 'SHORT' | 'MEDIUM' | 'LONG';
  estimatedHours: string;
  priceRange: 'FREE' | '$' | '$$' | '$$$';
  googleRating: number;
  ratingSource: string;
  bestTimeToVisit: string;
  activities: string[];
  tipsForSpecial: string;
  website: string;
  googleMaps: string;
  imageUrl: string;
  tags: string[];
}

export const dateIdeas: DateIdea[] = [
  {
    id: 'hillarys-boat-harbour',
    name: "Hillarys Boat Harbour",
    location: "Hillarys, Western Australia (20 minutes north of Perth CBD)",
    coordinates: "31.8261° S, 115.7391° E",
    whyGoodForCouples: "Perfect waterfront setting with stunning Indian Ocean sunsets, intimate dining options, and romantic strolls along the marina. The harbour offers a peaceful escape with yacht-watching, gentle coastal walks, and the option to spot dolphins or visit AQWA together.",
    duration: "LONG",
    estimatedHours: "5-8 hours",
    priceRange: "$$",
    googleRating: 4.5,
    ratingSource: "TripAdvisor average 8.1/10 for restaurants",
    bestTimeToVisit: "Late afternoon into evening for sunset views (golden hour around 5-7pm depending on season). Weekdays are quieter than weekends.",
    activities: [
      "Sunset watching along the 1.9km Lighthouse Trail",
      "Romantic dinner at Mia Cucina or The Breakwater (waterfront dining)",
      "Casual drinks and cocktails watching the sunset",
      "Strolling along jetties and marina",
      "Optional: AQWA (Aquarium of Western Australia) visit",
      "Optional: Rottnest Ferry departure point"
    ],
    tipsForSpecial: "Arrive early afternoon to explore, then time dinner for sunset. Book a window table at The Breakwater for unobstructed ocean views. Pack a light jacket as it can get breezy by the water. Free parking available.",
    website: "https://www.hillarysboardwalk.com.au/",
    googleMaps: "https://maps.google.com/?q=Hillarys+Boat+Harbour",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    tags: ["sunset", "waterfront", "dining", "walking", "ocean"]
  },
  {
    id: 'jacobs-ladder-kings-park',
    name: "Jacob's Ladder & Kings Park Walk",
    location: "Starting at Cliff Street (bottom) to Kings Park, Perth CBD",
    coordinates: "31.9614° S, 115.8417° E",
    whyGoodForCouples: "A romantic achievement together - climb 242 steps for spectacular panoramic views of Perth CBD and Swan River. The reward at the top is Kings Park's beautiful gardens, walking trails, and intimate spots perfect for fresh couples to talk and explore.",
    duration: "MEDIUM",
    estimatedHours: "2-4 hours (15 min climb + 2-3 hours in Kings Park)",
    priceRange: "FREE",
    googleRating: 4.5,
    ratingSource: "TripAdvisor - rated 'Good for Couples'",
    bestTimeToVisit: "Early morning (6-8am) or dusk (5-7pm) for cooler temperatures and stunning light. Avoid midday heat.",
    activities: [
      "Climb the 242 concrete steps together (43m ascent)",
      "Panoramic city and Swan River views from the top",
      "Stroll through Kings Park Botanic Gardens",
      "Walk the Fraser Avenue cliff path for best views",
      "Optional: Coffee/refreshments at Jacobs Larder café at the base (post-climb reward)"
    ],
    tipsForSpecial: "Bring water and wear comfortable shoes. Early morning = less crowded + beautiful sunrise light. Dusk = romantic sunset from the top. Take your time on the climb and enjoy the achievement together. Kings Park has many secluded spots for quiet conversations.",
    website: "https://www.bgpa.wa.gov.au/kings-park",
    googleMaps: "https://maps.google.com/?q=Jacobs+Ladder+Perth",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["hiking", "views", "free", "exercise", "nature"]
  },
  {
    id: 'cottesloe-beach',
    name: "Cottesloe Beach Sunset",
    location: "Cottesloe, Western Australia (12km west of Perth CBD)",
    coordinates: "32.0000° S, 115.7556° E",
    whyGoodForCouples: "Iconic west-facing beach with spectacular straight-on sunsets over the Indian Ocean. Quiet grassy terraces for picnics, romantic atmosphere with couples watching sunsets together, and nearby cafes for fish and chips or wine.",
    duration: "MEDIUM",
    estimatedHours: "3-4 hours",
    priceRange: "FREE",
    googleRating: 4.6,
    ratingSource: "TripAdvisor - rated 'Good for Couples' and 'Honeymoon Spot'",
    bestTimeToVisit: "2 hours before sunset onwards. Arrive early (4-5pm) to secure a good spot on the grassy terraces or near the groyne.",
    activities: [
      "Watch spectacular Indian Ocean sunset",
      "Picnic on grassy terraces overlooking the beach",
      "Fish and chips on the beach",
      "Swimming (lifeguards on duty)",
      "Walk along the shore",
      "Drinks/dinner at Cottesloe Beach Hotel with ocean views"
    ],
    tipsForSpecial: "Bring a blanket and picnic supplies. Free parking fills fast - arrive early or take bus 102 from Elizabeth Quay. Pack a light jacket as it can be windy. The grassy banks are perfect for spreading out and having quiet conversations while watching the sunset magic unfold.",
    website: "https://www.westernaustralia.com/en/attraction/cottesloe-beach",
    googleMaps: "https://maps.google.com/?q=Cottesloe+Beach+Perth",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    tags: ["beach", "sunset", "free", "picnic", "ocean"]
  },
  {
    id: 'swan-valley-wine',
    name: "Swan Valley Wine Trail",
    location: "Swan Valley (25 minutes northeast of Perth CBD)",
    coordinates: "31.7833° S, 116.0167° E",
    whyGoodForCouples: "Australia's oldest wine region with intimate boutique wineries, romantic vineyard settings, and gourmet food. Perfect for a relaxed day exploring together without worrying about driving (book a tour). Laid-back, quiet atmosphere ideal for getting to know each other.",
    duration: "LONG",
    estimatedHours: "5-7 hours (full day)",
    priceRange: "$$$",
    googleRating: 4.5,
    ratingSource: "Average for wineries and tours",
    bestTimeToVisit: "Lunch onwards (11am-5pm). Weekdays are quieter. Autumn (March-May) offers beautiful vineyard colors.",
    activities: [
      "Wine tastings at 4+ boutique wineries",
      "Romantic lunch at vineyard restaurant (Sandalford, Lancaster Wines)",
      "Cheese and charcuterie platters",
      "Chocolate factory visit",
      "Stroll through vineyards",
      "Optional: River cruise from Perth + lunch at Sandalford"
    ],
    tipsForSpecial: "Book a small-group tour (max 10 guests) for intimate experience - Best of Perth Tours highly rated. Lancaster Wines has a famous outdoor tasting shed under old vines. Upper Reach Winery has riverside walks. Tours include transportation, so no designated driver needed - relax and enjoy together.",
    website: "https://www.swanvalley.com.au/",
    googleMaps: "https://maps.google.com/?q=Swan+Valley+Western+Australia",
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800",
    tags: ["wine", "food", "romantic", "day-trip", "luxury"]
  },
  {
    id: 'fremantle-markets',
    name: "Fremantle Markets & Waterfront",
    location: "Fremantle, Western Australia (19km south of Perth CBD)",
    coordinates: "32.0569° S, 115.7439° E",
    whyGoodForCouples: "Charming historic port town with bohemian vibe, intimate cafes, artisan markets, and stunning sunset spots. Perfect mix of culture, food, and romance. Great for exploring together and discovering hidden spots.",
    duration: "LONG",
    estimatedHours: "5-8 hours",
    priceRange: "$$",
    googleRating: 4.4,
    ratingSource: "Markets and venues",
    bestTimeToVisit: "Saturday for Fremantle Markets (9am-6pm) + South Beach Sunset Market (5pm onwards). Arrive mid-morning, explore until sunset.",
    activities: [
      "Browse Fremantle Markets (artisan crafts, local produce, street performers)",
      "Lunch at Bread in Common or La Lune (French bistro)",
      "Coffee and wine tasting at Strange Company",
      "South Beach Sunset Market (food trucks, live music, sunset)",
      "Harbour walk at Gage Roads Brewery with ocean views",
      "Sunday evenings: Fremantle Arts Centre picnic concerts"
    ],
    tipsForSpecial: "Combine markets + sunset beach picnic for a full romantic day. Pack light for walking. La Lune is decidedly romantic with Parisian charm. Vin Populi has daily-changing chalkboard menu (reservations recommended). South Beach Sunset Market = live music + ocean sunset + wine - incredibly romantic for new couples.",
    website: "https://www.fremantlemarkets.com.au/",
    googleMaps: "https://maps.google.com/?q=Fremantle+Markets+Perth",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    tags: ["markets", "culture", "food", "bohemian", "historic"]
  },
  {
    id: 'south-perth-foreshore',
    name: "South Perth Foreshore & Matilda Bay Picnic",
    location: "South Perth Foreshore - Sir James Mitchell Park / Matilda Bay Reserve near UWA",
    coordinates: "31.9833° S, 115.8597° E",
    whyGoodForCouples: "Postcard-perfect city skyline views across the Swan River. Quiet, intimate spaces under shady trees, romantic sunset reflections on water, and the option for DIY picnic setups. Less touristy than city foreshore - perfect for deep conversations.",
    duration: "MEDIUM",
    estimatedHours: "3-5 hours",
    priceRange: "FREE",
    googleRating: 4.7,
    ratingSource: "Both locations highly rated",
    bestTimeToVisit: "Late afternoon (3-4pm) onwards for sunset. Evenings are magical with city lights reflecting on the water.",
    activities: [
      "Riverside picnic with Perth skyline views",
      "Sunset watching as city lights turn on",
      "Gentle walk along the foreshore",
      "Swimming at Matilda Bay (summer)",
      "Gelato from Mends Street Jetty (South Perth)",
      "Photography opportunities"
    ],
    tipsForSpecial: "South Perth Foreshore Zones 1-4, 9, 11, 12 are popular for intimate setups. Matilda Bay is quieter and has more shady trees. Arrive early afternoon to claim a prime spot. BYO picnic blanket, wine, cheese, and charcuterie. City skyline at sunset = Instagram-worthy + deeply romantic. Both spots well-lit at night for safe evening strolls.",
    website: "https://www.southperth.wa.gov.au/",
    googleMaps: "https://maps.google.com/?q=South+Perth+Foreshore",
    imageUrl: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800",
    tags: ["picnic", "skyline", "free", "romantic", "sunset"]
  },
  {
    id: 'art-gallery-wa',
    name: "Art Gallery of Western Australia (AGWA)",
    location: "Perth Cultural Centre, Northbridge, Perth CBD",
    coordinates: "31.9505° S, 115.8605° E",
    whyGoodForCouples: "Intimate cultural experience with 18,000+ artworks including rotating international exhibitions. Quiet galleries perfect for conversation starters, rooftop bar with city views, and the sophistication sets a romantic tone. Great for couples who enjoy art and meaningful discussions.",
    duration: "MEDIUM",
    estimatedHours: "2-4 hours",
    priceRange: "FREE",
    googleRating: 4.6,
    ratingSource: "Google Reviews",
    bestTimeToVisit: "Weekday afternoons (less crowded). Check for special evening events or Candlelight Concerts for extra romance.",
    activities: [
      "Explore 18,000+ artworks (Australia's largest First Nations collection)",
      "Rotating international exhibitions",
      "Rooftop bar with sweeping city views",
      "Gallery talks and tours",
      "AGWA Design Store for unique gifts",
      "Nearby: State Theatre Centre, Perth Concert Hall"
    ],
    tipsForSpecial: "Combine gallery visit with drinks at rooftop bar for sunset views. Check for immersive exhibitions (e.g., Rone's TIME exhibition had exclusive Perth installations). The Brutalist architecture is striking for photos. Free entry to permanent collection = budget-friendly. Perfect rainy day date or cool evening activity.",
    website: "https://artgallery.wa.gov.au/",
    googleMaps: "https://maps.google.com/?q=Art+Gallery+Western+Australia",
    imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
    tags: ["art", "culture", "free", "indoor", "sophisticated"]
  },
  {
    id: 'elizabeth-quay',
    name: "Elizabeth Quay Evening Stroll",
    location: "Elizabeth Quay, Perth CBD",
    coordinates: "31.9558° S, 115.8614° E",
    whyGoodForCouples: "Stunning waterfront precinct with romantic night-time atmosphere, city lights reflecting on Swan River, beautiful carousel, and intimate bars. Quieter in evenings with cooler temperatures and fewer crowds - perfect for hand-holding strolls and deep talks.",
    duration: "MEDIUM",
    estimatedHours: "2-3 hours",
    priceRange: "$",
    googleRating: 4.3,
    ratingSource: "Couples rated location 9.5/10",
    bestTimeToVisit: "Sunset onwards (6pm-9pm). Cooler temperatures, stunning lighting, and romantic atmosphere. Weeknights quieter than weekends.",
    activities: [
      "Romantic boardwalk stroll with city skyline backdrop",
      "Ride the Italian carousel together (old world charm)",
      "Sunset cocktails at The Island or Henry's Bar",
      "Ferry ride across Swan River to South Perth",
      "Dinner at waterfront restaurants (Oyster Bar, Milky Lane)",
      "People-watching and city lights"
    ],
    tipsForSpecial: "Pack a light jacket (can be windy). The carousel is genuinely romantic with Italian designs and beautiful music. Book a sunset cocktail spot with river views. The ferry to South Perth is a cheap, romantic mini-adventure. Best visited at night when it's less crowded and the lighting creates magic.",
    website: "https://www.elizabethquay.com.au/",
    googleMaps: "https://maps.google.com/?q=Elizabeth+Quay+Perth",
    imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
    tags: ["city", "waterfront", "evening", "romantic", "carousel"]
  },
  {
    id: 'rottnest-island',
    name: "Rottnest Island Quokka Adventure",
    location: "Rottnest Island (ferry from Barrack Street Jetty or Fremantle)",
    coordinates: "32.0059° S, 115.5361° E",
    whyGoodForCouples: "Unique island escape with world-famous quokkas (happiest animals on Earth!), 63 pristine beaches, turquoise waters, and the thrill of exploring together. Shared adventure creates bonding memories - perfect for active couples.",
    duration: "LONG",
    estimatedHours: "6-8 hours (full day trip)",
    priceRange: "$$",
    googleRating: 4.6,
    ratingSource: "TripAdvisor",
    bestTimeToVisit: "Spring/Summer (Sept-April) for best weather. Catch early ferry (9am) to maximize island time. Quokkas most active in afternoon/evening.",
    activities: [
      "Quokka selfies (10,000-12,000 quokkas on island!)",
      "Bike hire to explore 63 beaches and 20 bays",
      "Swimming and snorkeling at The Basin, Pinky Beach, Parakeet Bay",
      "Romantic lunch at Thomsons Rottnest (sunset views)",
      "Couples spa treatment at Karma Spa",
      "Beach picnics at secluded bays"
    ],
    tipsForSpecial: "Book ferry in advance. BYO picnic (food expensive on island). Rent bikes together and explore - most romantic spots: The Basin, Salmon Bay. Quokkas friendliest near main settlement (fresh water). Illegal to touch/feed but they come close for photos. Stay for sunset at Thomsons Rottnest with cocktails. This is a FULL adventure day - wear sunscreen and comfy shoes!",
    website: "https://www.rottnestisland.com/",
    googleMaps: "https://maps.google.com/?q=Rottnest+Island",
    imageUrl: "https://images.unsplash.com/photo-1578950435899-d1c1bf932ab2?w=800",
    tags: ["adventure", "island", "quokkas", "beaches", "cycling"]
  },
  {
    id: 'perth-observatory',
    name: "Perth Observatory Stargazing",
    location: "Bickley (25km east of Perth CBD in Perth Hills)",
    coordinates: "32.0058° S, 116.1358° E",
    whyGoodForCouples: "Deeply romantic experience gazing at stars together, guided by expert astronomers. Peaceful wilderness setting with kangaroos, minimal light pollution, and the intimacy of discovering the cosmos side-by-side. Perfect for thoughtful, curious couples.",
    duration: "MEDIUM",
    estimatedHours: "2.5-3 hours (evening tour)",
    priceRange: "$$",
    googleRating: 4.7,
    ratingSource: "TripAdvisor - rated 'Good for Couples', 147 'Excellent' reviews",
    bestTimeToVisit: "Dark sky nights (no moon) for nebulae and clusters. Moonlit nights to see lunar surface detail. Book Valentine's Night Tour for extra romance. Tours run year-round.",
    activities: [
      "Guided night sky tour with telescopes (minimum 4 celestial objects guaranteed)",
      "View planets, star clusters, nebulae, galaxies",
      "125+ year old observatory tour",
      "Astronomical presentations by experts",
      "Optional: Romantic picnic on lawn before tour (bring own)",
      "Kangaroo encounters on grounds"
    ],
    tipsForSpecial: "Arrive early for romantic picnic on back lawn surrounded by wilderness and kangaroos. Valentine's Night Tour is explicitly designed for couples. Dress warmly (Hills get cold at night). Book dark sky night for best views. If cloudy, still get facility tour + presentation + 50% discount for future visit. The shared wonder of viewing galaxies together is profoundly connecting.",
    website: "https://www.perthobservatory.com.au/",
    googleMaps: "https://maps.google.com/?q=Perth+Observatory+Bickley",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
    tags: ["stargazing", "unique", "romantic", "educational", "nature"]
  }
];

export const getDurationLabel = (duration: DateIdea['duration']): string => {
  switch (duration) {
    case 'SHORT': return '1-2 hours';
    case 'MEDIUM': return '3-4 hours';
    case 'LONG': return '5+ hours';
  }
};

export const getPriceLabel = (price: DateIdea['priceRange']): string => {
  switch (price) {
    case 'FREE': return 'Free';
    case '$': return 'Budget (~$20-50)';
    case '$$': return 'Moderate (~$50-150)';
    case '$$$': return 'Splurge (~$150+)';
  }
};
