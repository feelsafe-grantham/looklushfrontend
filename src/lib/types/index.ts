export interface ApiResponse<T> {
  message: string;
  data: T;
  code: number;
}

export interface HeaderSubLinkType {
  id?: number;
  label: string;
  url: string;
}
export interface HeaderLinkType {
  label: string;
  url: string;
  subLink: HeaderSubLinkType[];
}

interface VideoTestimonialComments {
  user: string;
  message: string;
}
export interface VideoTestimonial {
  index: number;
  id: Number;
  username: string;
  viewers: number;
  comments: VideoTestimonialComments[];
  videoUrl: string;
  fallback?: string;
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

export interface PriceItem {
  service: string;
  market_price: string;
  our_price: string;
  diff: string;
  value: string;
  achievement: string;
}

export interface ServiceCard {
  image: string;
  likes: number;
  impressions: number;
}

export interface ServiceItem {
  id: number;
  name: string;
  images: ServiceCard[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: number;
  text: string;
  image: string;
  faqs: FaqItem[];
}

export interface ConsultServices {
  id: number;
  image: string;
  title: string;
  description: string;
  phone: string;
  timing: string;
  fee: string;
  address: string;
}

export interface ProblemCardsType {
  id: number;
  title: string;
  image: string;
  review: string;
  description?: string;
  no_of_reviews: string;
  button_text: string;
}

export interface ProblemCatType {
  heading: string;
  cards: ProblemCardsType[];
}

export interface KeyValueType {
  key: string;
  value: string;
}
export interface ImageType {
  image: string;
}
export interface BenifitsType {
  heading1: string;
  heading2?: string;
  description: string;
  images: ImageType[];
}
export interface TreatmentDetailType {
  id: number;
  title: string;
  image: string;
  description: string;
  stars: 5;
  treatment_id?: number;
  satisfied_customers: number;
  button_text: string;
  banner_image: string;
  banner_text1: string;
  banner_text2: string;
  book_now_link: string;
  keypoints: KeyValueType[];
  benifits: BenifitsType[];
}

export interface Testimonial {
  client_name: string;
  star_rating: number;
  client_text: string;
  profile_image: string;
  image: string;
  image_alt?: string;
}

export interface ResultSection {
  title1: string;
  title2?: string;
  description: string;
  image: ImageType[];
  video_url: string;
  fallback: string;
  image_alt?: string;
}

export interface AddressType {
  mapSrc: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  visit_link?: string;
}

export type AlertType = "success" | "info" | "warning" | "error";
