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
