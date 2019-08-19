import Sequelize from 'sequelize'
import { Componentvalue } from './componentvalue.model'

export class Component extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        eufdname: { // FOREIGNKEY for RAVINTOTEKIJANIMI.THSCODE
          type: DataTypes.STRING(15),
          allowNull: false,
          primaryKey: true,
          comment: 'null',
          autoIncrement: false
        },
        compunit: { // FOREIGNKEY for RAVINTOTEKIJAYKSIKKO.THSCODE
          type: DataTypes.STRING(15),
          allowNull: false,
          primaryKey: false,
          comment: 'null',
          autoIncrement: false
        },
        cmpclass: { // FOREIGNKEY for RAVINTOTEKIJALUOKKA.THSCODE
          type: DataTypes.STRING(15)
        },
        cmpclassp: { // FOREIGNKEY for RAVINTOTEKIJALUOKKA.THSCODE
          type: DataTypes.STRING(15)
        }
      },
      {
        sequelize,
        tableName: 'ravintotekija',
        freezeTableName: true,
        timestamps: false
      }
    )
  }

  static associate() {
    this.hasMany(Componentvalue, {
      foreignKey: 'eufdname',
      sourceKey: 'eufdname'
    })
  }
}
