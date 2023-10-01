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
