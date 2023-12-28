import {Category, Gallery} from "../model";
import {Op} from "sequelize";

export async function getCategories() {
  try {
    const dbCategories = await Category.findAll({ where: { category_id: { [Op.eq]: null } }, raw: true });
    for (let i = 0; i < dbCategories.length; i++) {
      if (dbCategories[i].image_id) {
        const image = await Gallery.findOne({
          where: { id: dbCategories[i].image_id! },
        });
        if (image) {
          (dbCategories[i] as any).src = image.src;
        }
      }
      (dbCategories[i] as any).sub_categories = await getSubCategories(dbCategories[i]);
    }
    return dbCategories;
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function getSubCategories(cat: Category) {
  try {
    const count = await Category.count({ where: { category_id: cat.id } });
    if (count) {
      const s_c = await Category.findAll({ where: { category_id: cat.id }, raw: true });
      for (let i = 0; i < s_c.length; i++) {
        if (s_c[i].image_id) {
          const image = await Gallery.findOne({
            where: { id: s_c[i].image_id! },
          });
          if (image) {
            (s_c[i] as any).src = image.src;
          }
        }
        (s_c[i] as any).sub_categories = await getSubCategories(s_c[i]);
      }
      return s_c;
    }
    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
}