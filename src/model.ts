import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  ForeignKey,
} from "sequelize";
import db from "./db";

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<number>;
  declare category: boolean;
  declare name: string;
  declare desc: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare category_id: ForeignKey<Category["id"]>;
  declare img_id: ForeignKey<Gallery["link"]>;
  declare characters_id : ForeignKey<Characters["id"]>;
}
export class Gallery extends Model<InferAttributes<Gallery>, InferCreationAttributes<Gallery>
> {
 declare id: CreationOptional<number>;
 declare size: string;
 declare height: string;
 declare width: string;
 declare link: string;
 declare createdAt: CreationOptional<Date>;
 declare updatedAt: CreationOptional<Date>;
}
export class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export class Characters extends Model<
  InferAttributes<Characters>,
  InferCreationAttributes<Characters>
> {
  declare id: CreationOptional<number>;
  declare key: string;
  declare value: string;
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
  declare img_id: ForeignKey<Gallery['link']>;
}
export class Feedback extends Model<InferAttributes<Feedback>, InferCreationAttributes<Feedback>>{
    declare id: CreationOptional<number>;
    declare u_name: string;
    declare number: string;
    declare email: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    desc: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.BOOLEAN, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "products", sequelize: db },
);
Gallery.init({
    id: {type: DataTypes.INTEGER, allowNull: false},
    height: {type: DataTypes.STRING, allowNull: false},
    width: {type: DataTypes.STRING, allowNull: false},
    size: {type: DataTypes.STRING, allowNull: false},
    link: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
    createdAt: {type: DataTypes.DATE, allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: false},
    },
    {tableName: "gallery" , sequelize: db},
    )
Category.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "categories", sequelize: db },
);

Characters.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    key: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "characters", sequelize: db },
);

Certificate.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  { tableName: "certificates", sequelize: db },
);

Feedback.init(
    {
      id:{type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
      u_name:{type: DataTypes.STRING, allowNull: false},
      number:{type: DataTypes.STRING, allowNull: false},
      email:{type: DataTypes.STRING, allowNull: false},
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    },
    { tableName: "feedback", sequelize: db },
);

Category.hasMany(Product, {
  foreignKey: { name: "category_id", allowNull: false },
});
Gallery.hasMany(Product, {
    foreignKey: {name: "img_id", allowNull: false},
})
Characters.hasMany(Characters, {
    foreignKey: {name: "characters_id" , allowNull: false}
})
Product.belongsTo(Category, {
  foreignKey: { name: "category_id", allowNull: false },
});
Product.belongsTo(Gallery,{
    foreignKey: {name: "img_id", allowNull:false},
})
Product.belongsTo(Characters, {
    foreignKey: {name: "characters_id", allowNull: false},
})
Certificate.belongsTo(Gallery, {
    foreignKey: {name: "img_id", allowNull: false}
})