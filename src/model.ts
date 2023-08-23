import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes} from "sequelize";
import db from "./db";

// export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
//     declare id: CreationOptional<number>;
//     declare name: string;
//     declare surname: string;
//     declare birth: number;
//     declare male: boolean;
//     declare phone_number: number;
//     declare email: string;
//     declare password: string;
//     declare createdAt: CreationOptional<Date>;
//     declare updatedAt: CreationOptional<Date>;
// }

export class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare img: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

// export class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
//     declare id: CreationOptional<number>;
//     declare name:string;
//     declare createdAt: CreationOptional<Date>;
//     declare updateAt: CreationOptional<Date>;
// }
//
// export class Characters extends Model<InferAttributes<Characters> , InferCreationAttributes<Characters>> {
//     declare id: CreationOptional<number>;
//     declare key: string;
//     declare value: string;
//     declare createdAt: CreationOptional<Date>;
//     declare updateAt: CreationOptional<Date>;
// }
//
// export class Certificate extends Model<InferAttributes<Certificate> , InferCreationAttributes<Certificate>> {
//     declare id: CreationOptional<number>;
//     declare img: string;
//     declare createAt: CreationOptional<Date>;
//     declare updateAt: CreationOptional<Date>;
// }

Product.init({
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true},
        name:{type: DataTypes.STRING, allowNull:false},
        img: {type: DataTypes.STRING, allowNull: false},
        createdAt:{type: DataTypes.DATE, allowNull:false},
        updatedAt:{type: DataTypes.DATE, allowNull:false}
    },{tableName: "products", sequelize: db});



// User.init({
//     id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     surname: { type: DataTypes.STRING, allowNull: false },
//     birth: { type: DataTypes.BIGINT, allowNull: false },
//     male: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
//     phone_number: { type: DataTypes.BIGINT, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false },
//     password: { type: DataTypes.TEXT, allowNull: false },
//     createdAt: { type: DataTypes.DATE, allowNull: false },
//     updatedAt: { type: DataTypes.DATE, allowNull: false }
// }, {tableName: "users", sequelize: db});