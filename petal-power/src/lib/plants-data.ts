export interface PlantItem {
  id: string;
  name: string;
  botanicalName?: string;
  category: 'indoor' | 'outdoor' | 'pot' | 'potted';
  tag?: string;
  family?: string;
  moisture: string;
  price: number;
  formattedPrice: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  lightRequirement: string;
  waterSchedule: string;
  petFriendly: boolean;
  featured?: boolean;
}

export const NEW_PLANTS: PlantItem[] = [
  {
    id: 'peperomia-watermelon',
    name: 'Peperomia Plants',
    botanicalName: 'Peperomia argyreia',
    category: 'indoor',
    tag: 'Pet Friendly',
    family: 'Piperaceae',
    moisture: 'Moist but well-drained',
    price: 34,
    formattedPrice: '$34.00',
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop',
    description: 'Distinctive striped foliage resembling watermelon rinds. Compact, succulent-like leaves thrive in bright indirect light and maintain a tidy, lush tabletop aesthetic.',
    lightRequirement: 'Medium to bright indirect light',
    waterSchedule: 'Water every 7-10 days when top 2 inches dry',
    petFriendly: true,
    featured: true,
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle-Leaf Fig',
    botanicalName: 'Ficus lyrata',
    category: 'indoor',
    tag: 'Statement Tree',
    family: 'Moraceae',
    moisture: 'medium moisture, well-draining',
    price: 89,
    formattedPrice: '$89.00',
    rating: 4.8,
    reviewsCount: 245,
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?q=80&w=1000&auto=format&fit=crop',
    description: 'Renowned for its dramatic, violin-shaped foliage. An architectural centerpiece that brings lush tropical elegance to modern living rooms and sunlit spaces.',
    lightRequirement: 'Abundant indirect natural sunshine',
    waterSchedule: 'Allow top soil to dry slightly before thorough watering',
    petFriendly: false,
    featured: true,
  },
  {
    id: 'calathea-orbifolia',
    name: 'Calathea Orbifolia',
    botanicalName: 'Goeppertia orbifolia',
    category: 'indoor',
    tag: 'Air Purifier',
    family: 'Marantaceae',
    moisture: 'Moist but well-drained',
    price: 52,
    formattedPrice: '$52.00',
    rating: 4.95,
    reviewsCount: 96,
    image: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1000&auto=format&fit=crop',
    description: 'Large, round, metallic-striped leaves with striking geometric patterns. Naturally purifies indoor air while moving its leaves in a calming diurnal prayer rhythm.',
    lightRequirement: 'Moderate shade to filtered indirect light',
    waterSchedule: 'Keep soil evenly moist using filtered rainwater',
    petFriendly: true,
    featured: true,
  },
];

export const CATEGORY_FEATURE_CARDS = [
  {
    id: 'pet-friendly',
    title: 'Pet Friendly Plants',
    badge: 'Piperaceae',
    description: 'There are many houseplants options for your home that are nontoxic. These plants will add life to your home while keeping your kids and pets safe.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    tags: ['Safe for cats', 'Safe for dogs', 'Non-toxic'],
  },
  {
    id: 'orchids',
    title: 'Orchids',
    badge: 'Araceae',
    description: "Orchids are easily everyone's favorite flowering plant. Find new orchids and orchid success items in this collection.",
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1',
    tags: ['Long blooming', 'Delicate scents', 'Exotic'],
  },
  {
    id: 'succulents',
    title: 'Succulents',
    badge: 'Moraceae',
    description: 'All succulents are cacti, but not all cacti are succulents. Both make low maintenance houseplants',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1',
    tags: ['Drought tolerant', 'Low maintenance', 'Architectural'],
  },
];

export const INDOOR_COLLECTION_CARDS = [
  {
    id: 'philodendron',
    title: 'Philodendron',
    description: 'Philodendron comes in a variety of leaf shapes and colors, making it a great plant to compliment your home decor while also being low maintenance.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2',
    tall: true,
  },
  {
    id: 'calathea',
    title: 'Calathea',
    description: 'Known for bold ornamental leaf patterns and vibrant undersides that fold up gracefully at night.',
    image: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1',
    tall: false,
  },
  {
    id: 'air-purifying',
    title: 'Air Purifying',
    description: 'Naturally filters volatile airborne compounds, improving respiratory wellness and restorative rest.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1',
    tall: false,
  },
  {
    id: 'low-light',
    title: 'Low Light Tolerant',
    description: 'Tough, resilient foliage companions that flourish in ambient interior illumination and north-facing rooms.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2',
    tall: false,
  },
];

export const FAQ_ITEMS = [
  {
    id: 'delivery',
    question: 'Ordering for Delivery?',
    answer: 'We hand-pack and dispatch all living plants in climate-controlled, sustainable packaging to guarantee pristine arrival. Local deliveries arrive within 24-48 hours with door-to-door temperature protection and unboxing guidance.',
  },
  {
    id: 'potting-services',
    question: 'Potting Services',
    defaultOpen: true,
    answer: 'We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you. There is a fee depending one what supplies are used. Visit us or call us for more details.',
  },
  {
    id: 'shipping',
    question: 'Do we ship plants?',
    answer: 'Yes! We ship across the entire country using custom insulated, shock-absorbent root sleeves and thermal heat packs in colder seasons. Every specimen is inspected and hardened before transit with a 30-day health guarantee.',
  },
  {
    id: 'pickup',
    question: 'Ordering for Pick up?',
    answer: 'Select in-store pickup at checkout to reserve your plants immediately. Our greenhouse team will inspect, groom, and hold your specimen ready at our pickup bay with convenient curbside loading.',
  },
];
