export interface CollectionItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  location: string;
}

export interface StylingRequest {
  occasion: string;
  colors: string;
  bodyType: string;
  preferences: string;
}

export interface StylingResponse {
  advice: string;
  sketchUrl?: string;
}
