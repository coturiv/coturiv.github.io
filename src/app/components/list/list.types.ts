export interface Category {
  id?: string;
  title?: string;
  slug?: string;
}

export interface Project {
  id?: string;
  title?: string;
  slug?: string;
  description?: string;
  category?: string;
  duration?: number;
  steps?: {
    order?: number;
    title?: string;
    subtitle?: string;
    content?: string;
  }[];
  totalSteps?: number;
  updatedAt?: string;
  featured?: boolean;
  progress?: {
    currentStep?: number;
    completed?: number;
  };
}
