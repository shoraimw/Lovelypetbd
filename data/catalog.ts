export type PetKey =
  | "all"
  | "cat"
  | "dog"
  | "bird"
  | "small-animal"
  | "aqua-reptile";

export type PetCategory = {
  id: Exclude<PetKey, "all">;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: string;
};

export type Collection = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  pets: Exclude<PetKey, "all">[];
  keywords: string[];
};

export const petCategories: PetCategory[] = [
  {
    id: "cat",
    name: "Cats",
    description: "Food, litter, toys & care",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A curious cat looking into the camera",
    tone: "lilac"
  },
  {
    id: "dog",
    name: "Dogs",
    description: "Nutrition, walks & play",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A happy golden retriever outdoors",
    tone: "peach"
  },
  {
    id: "bird",
    name: "Birds",
    description: "Feed, toys & accessories",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A colourful companion bird",
    tone: "sky"
  },
  {
    id: "small-animal",
    name: "Small pets",
    description: "Little essentials for little friends",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A soft white rabbit",
    tone: "butter"
  },
  {
    id: "aqua-reptile",
    name: "Aqua & reptile",
    description: "Habitat, food & daily care",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Colourful fish swimming underwater",
    tone: "mint"
  }
];

export const petFilters: { id: PetKey; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "cat", label: "Cats" },
  { id: "dog", label: "Dogs" },
  { id: "bird", label: "Birds" },
  { id: "small-animal", label: "Small pets" },
  { id: "aqua-reptile", label: "Aqua & reptile" }
];

export const collections: Collection[] = [
  {
    id: "food",
    title: "Food for every life stage",
    eyebrow: "NUTRITION",
    description: "Explore dry food, wet meals, treats and everyday nutrition for growing kittens and adult companions.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A relaxed cat at home",
    pets: ["cat", "dog", "bird", "small-animal"],
    keywords: ["food", "dry food", "wet food", "kitten", "adult", "treat", "nutrition"]
  },
  {
    id: "litter",
    title: "A cleaner, comfier corner",
    eyebrow: "LITTER & HYGIENE",
    description: "Find litter, litter boxes and practical clean-up essentials for a fresher everyday routine.",
    image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A cat resting comfortably indoors",
    pets: ["cat"],
    keywords: ["litter", "litter box", "hygiene", "clean", "tofu", "bentonite"]
  },
  {
    id: "toys",
    title: "More play. More happy.",
    eyebrow: "TOYS & ENRICHMENT",
    description: "Make room for curious noses, busy paws and playful moments with toys and enrichment essentials.",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A playful cat enjoying a moment",
    pets: ["cat", "dog", "bird", "small-animal"],
    keywords: ["toy", "toys", "play", "scratchers", "catnip", "enrichment"]
  },
  {
    id: "walks",
    title: "Ready for every little adventure",
    eyebrow: "COLLARS & CARRIERS",
    description: "Browse collars, harnesses, leashes, carriers and practical travel accessories.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A friendly dog enjoying the outdoors",
    pets: ["cat", "dog"],
    keywords: ["collar", "harness", "leash", "carrier", "travel", "walk"]
  },
  {
    id: "grooming",
    title: "Everyday care, made gentler",
    eyebrow: "GROOMING & WELLNESS",
    description: "Explore grooming tools, shampoos and daily-care essentials to help keep your companion comfortable.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A dog relaxing during a grooming session",
    pets: ["cat", "dog", "bird", "small-animal"],
    keywords: ["grooming", "shampoo", "comb", "brush", "health", "care", "flea", "tick"]
  },
  {
    id: "bird-care",
    title: "A little something for every feather",
    eyebrow: "BIRD ESSENTIALS",
    description: "Discover bird food, feeders, toys and useful accessories for your feathered friend.",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A colourful bird perched on a branch",
    pets: ["bird"],
    keywords: ["bird", "feed", "feeder", "cage", "seed"]
  },
  {
    id: "small-pet-care",
    title: "Little friends, lovely care",
    eyebrow: "SMALL ANIMALS",
    description: "Find daily food and habitat essentials for rabbits and other small companions.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A white rabbit sitting on a soft surface",
    pets: ["small-animal"],
    keywords: ["rabbit", "small animal", "bedding", "habitat", "food"]
  },
  {
    id: "aquatic",
    title: "A brighter little underwater world",
    eyebrow: "AQUA & REPTILE",
    description: "Explore everyday essentials for aquatic and reptile companions and their habitats.",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A colourful fish in a clear aquarium",
    pets: ["aqua-reptile"],
    keywords: ["fish", "aquarium", "aqua", "reptile", "habitat"]
  }
];

export const featuredBrands = [
  "Royal Canin",
  "Reflex Plus",
  "Smart Heart",
  "Whiskas",
  "Felicia",
  "Drools",
  "Kaniva",
  "Lara"
];
