
export interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
  icon: string;
}

export interface ScoutingStage {
  id: number;
  name: string;
  ageRange: string;
  color: string;
  description: string;
  icon: string;
}

export interface Activity {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  category: string;
}
