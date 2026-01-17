
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  patients: number;
  reviews: number;
  position: string;
  center: string;
  education: string[];
  focusAreas: string[];
  biography?: string;
  workingHours?: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}
