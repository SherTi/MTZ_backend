interface Info {
  id: string;
  phone_1: string;
  phone_2: string;
  telegram: string;
  facebook: string;
  instagram: string;
  certificates: string[];
  staff_main: string;
  staff: string[];
  partners: string[];
  recommended_categories: RecommendedCategories;
  createdAt: Date;
  updatedAt: Date;
}

declare global {
  namespace Express {
    interface Request {
      info?: Info;
    }
  }
}

export type CharacterItem = {
  key: string;
  value: string;
};
export type Characters = {
  name: string;
  characters: CharacterItem[];
};

export interface ParamsDictionary {
  [key: string]: string;
}

export interface CreateProductBody {
  type?: "tractor" | "part";
  name?: string;
  main_chars?: CharacterItem[];
  main_image?: string;
  st_image?: string;
  sd_image?: string;
  th_image?: string;
  desc?: string;
  chars?: Characters[];
  category_id?: string;
}

export interface CreateCategoryBody {
  type?: "tractor" | "spare";
  name?: string;
  image_id?: string;
}

export interface RecommendedCategories {
  id: string;
  name: string;
  image: string;
}
