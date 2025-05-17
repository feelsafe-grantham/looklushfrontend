export interface ApiResponse<T> {
  message: string;
  data: T;
  code: number;
}
interface VideoTestimonialComments {
  user: string;
  message: string;
}
export interface VideoTestimonial {
  id: Number;
  username: string;
  viewers: number;
  comments: VideoTestimonialComments[];
  videoUrl: string;
  fallbackImage?: string;
}
export interface HeroImagesType {
  id: string;
  image: string;
  index: number;
  url?: string;
}
export interface BlogType {
  id: string;
  title: string;
  description: string;
  content: string;
  image_sq: string;
  image_hr: string;
  author_name: string;
  date: string;
}

export interface CompareCardType {
  client_name: string;
  star_rating: number;
  client_text: string;
  image_before: string;
  image_after: string;
  image_alt?: string;
}
export interface ImageSliderProps {
  before: string;
  after: string;
  alt: string;
}

export interface FallbackType {
  fallback?: string;
}
export interface VideoType {
  video_url?: string;
}

export interface VidoeFallbackType {
  fallback: string;
  video_url: string;
}
