import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  ForeignKey,
} from "sequelize";
import db from "./db";
import { CharacterItem, Characters } from "./types";

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
}

export class Certificate extends Model<
  InferAttributes<Certificate>,
  InferCreationAttributes<Certificate>
> {
  declare id: CreationOptional<number>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare img_id: ForeignKey<Gallery["id"]>;
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

Certificate.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "certificates", sequelize: db },
);

Category.hasMany(Product, {
  foreignKey: { name: "category_id", allowNull: false },
});
Product.belongsTo(Category, {
  foreignKey: { name: "category_id", allowNull: false },
});
Gallery.hasMany(Certificate, { foreignKey: { name: "img_id" } });
Certificate.belongsTo(Gallery, {
  foreignKey: { name: "img_id", allowNull: false },
});
