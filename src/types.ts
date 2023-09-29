export type Characters = {
  key: string;
  value: string;
};

export interface ParamsDictionary {
  [key: string]: string;
}

export interface CreateProductBody {
  type?: "tractor" | "part";
  name?: string;
  main_chars?: Characters[];
  main_image?: string;
  st_image?: string;
  sd_image?: string;
  th_image?: string;
  desc?: string;
  motor?: Characters[];
  trans?: Characters[];
  equipment?: string[];
  chars?: Characters[];
  category_id?: string;
}

export interface CreateCategoryBody {
  type?: "tractor" | "spare";
  name?: string;
  image_id?: string;
}
