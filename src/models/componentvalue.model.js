import Sequelize from 'sequelize'
import { Food } from './food.model'
import { Foodbase } from './foodbase.model'
import { Component } from './component.model'

export class Componentvalue extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: 'null',
          autoIncrement: true
        },
        foodid: { // FOREIGNKEY for ELINTARVIKE.FOODID
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: false,
          comment: 'null',
          autoIncrement: false
        },
        eufdname: { // FOREIGNKEY for RAVINTOTEKIJA.EUFDNAME
          type: DataTypes.STRING(15)
        },
        bestloc: {
          type: DataTypes.DECIMAL(8,2)
        },
        acqtype: {
          type: DataTypes.CHAR()
        },
        methtype: {
          type: DataTypes.STRING(2)
        }
      },
      {
        sequelize,
        tableName: 'ravintoarvo',
        freezeTableName: true,
        timestamps: false
      }
    )
  }

  static associate() {
    this.belongsTo(Food, {
      foreignKey: 'foodid',
      sourceKey: 'foodid'
    })

    this.belongsTo(Foodbase, {
      foreignKey: 'foodid',
      sourceKey: 'foodid'
    })

    this.belongsTo(Component, {
      foreignKey: 'eufdname',
      sourceKey: 'eufdname'
    })
  }
}
