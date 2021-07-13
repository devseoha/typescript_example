import { DataTypes, Model } from "sequelize";
import { dbType } from ".";
import { sequelize } from "./sequelize";

class Hashtag extends Model {
  public readonly id!: Number;
  public name!: string;
  public readonly createsAt!: Date;
  public readonly updatesAt!: Date;
}

Hashtag.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Hashtag",
    tableName: "hashtag",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export const associate = (db: dbType) => {};

export default Hashtag;
