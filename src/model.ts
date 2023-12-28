import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  ForeignKey,
} from "sequelize";
import db from "./db";
import { CharacterItem, Characters, RecommendedCategories } from "./types";

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare desc: string;
  declare main_chars: CharacterItem[];
  declare main_image: string;
  declare st_image?: string | null;
  declare sd_image?: string | null;
  declare th_image?: string | null;
  declare chars?: Characters[] | null;
  declare isRecommended: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare category_id: ForeignKey<Category["id"]>;
}
export class Gallery extends Model<
  InferAttributes<Gallery>,
  InferCreationAttributes<Gallery>
> {
  declare id: CreationOptional<number>;
  declare name?: string;
  declare size: string;
  declare height: number;
  declare width: number;
  declare src: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}
export class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare image_id?: string | null;
  declare tractor: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare category_id: ForeignKey<Category["id"]> | null;
}

export class Settings extends Model<
  InferAttributes<Settings>,
  InferCreationAttributes<Settings>
> {
  declare id: CreationOptional<string>;
  declare phone_1: string;
  declare phone_2: string;
  declare telegram: string;
  declare facebook: string;
  declare instagram: string;
  declare certificates: string[];
  declare staff_main: string;
  declare staff: string[];
  declare partners: string[];
  declare recommended_categories: RecommendedCategories[];
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export class Applications extends Model<
  InferAttributes<Applications>,
  InferCreationAttributes<Applications>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare phone: string;
  declare mail: string;
  declare product?: string;
  declare submitted: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    name: { type: DataTypes.TEXT, allowNull: false },
    desc: { type: DataTypes.TEXT, allowNull: false },
    main_chars: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("main_chars") as any);
      },
      set(value) {
        return this.setDataValue("main_chars", JSON.stringify(value) as any);
      },
    },
    main_image: { type: DataTypes.TEXT, allowNull: false },
    st_image: { type: DataTypes.TEXT, allowNull: true },
    sd_image: { type: DataTypes.TEXT, allowNull: true },
    th_image: { type: DataTypes.TEXT, allowNull: true },
    chars: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("chars") as any);
      },
      set(value) {
        return this.setDataValue("chars", JSON.stringify(value) as any);
      },
    },
    isRecommended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "products", sequelize: db },
);
Gallery.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      get() {
        const strArr = this.getDataValue("src").split("/");
        return strArr[strArr.length - 1];
      },
    },
    height: {
      type: DataTypes.BIGINT,
      allowNull: false,
      get() {
        return parseInt(this.getDataValue("height") as any);
      },
    },
    width: {
      type: DataTypes.BIGINT,
      allowNull: false,
      get() {
        return parseInt(this.getDataValue("width") as any);
      },
    },
    size: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    src: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "gallery", sequelize: db },
);
Category.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    image_id: { type: DataTypes.TEXT, allowNull: true },
    tractor: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "categories", sequelize: db },
);

Settings.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    phone_1: { type: DataTypes.TEXT, allowNull: false },
    phone_2: { type: DataTypes.TEXT, allowNull: false },
    telegram: { type: DataTypes.TEXT, allowNull: false },
    facebook: { type: DataTypes.TEXT, allowNull: false },
    instagram: { type: DataTypes.TEXT, allowNull: false },
    certificates: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("certificates") as any);
      },
      set(value) {
        this.setDataValue("certificates", JSON.stringify(value) as any);
      },
    },
    staff_main: { type: DataTypes.TEXT, allowNull: false },
    staff: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("staff") as any);
      },
      set(value) {
        this.setDataValue("staff", JSON.stringify(value) as any);
      },
    },
    recommended_categories: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("recommended_categories") as any);
      },
      set(value) {
        this.setDataValue(
          "recommended_categories",
          JSON.stringify(value) as any,
        );
      },
    },
    partners: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("partners") as any);
      },
      set(value) {
        this.setDataValue("partners", JSON.stringify(value) as any);
      },
    },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "settings", sequelize: db },
);

Applications.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: { type: DataTypes.TEXT, allowNull: false },
    phone: { type: DataTypes.TEXT, allowNull: false },
    mail: { type: DataTypes.TEXT, allowNull: false },
    product: { type: DataTypes.TEXT, allowNull: true },
    submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "applications", sequelize: db },
);

Category.hasMany(Category, { foreignKey: { name: "category_id", allowNull: true } });
Category.belongsTo(Category, { foreignKey: { name: "category_id", allowNull: true } });

Category.hasMany(Product, {
  foreignKey: { name: "category_id", allowNull: false },
});
Product.belongsTo(Category, {
  foreignKey: { name: "category_id", allowNull: false },
});
