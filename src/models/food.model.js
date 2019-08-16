import Sequelize from 'sequelize'
//import { associatemodel... } from './customergroup.model'

export class Food extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        foodid: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: 'null',
          autoIncrement: false
        },
        foodname: {
          type: DataTypes.STRING(115),
          allowNull: true,
          primaryKey: false,
          comment: 'null',
          autoIncrement: false
        },
        foodtype: { // FOREIGNKEY for ELINTARVIKETYYPPI.THSCODE
          type: DataTypes.STRING(15)
        },
        process: { // FOREIGNKEY for VALMISTUSTAPA.THSCODE
          type: DataTypes.STRING(15)
        },
        edport: {
          type: DataTypes.INTEGER(11)
        },
        igclass: { // FOREIGNKEY for RAAKAAINELUOKKA.THSCODE
          type: DataTypes.STRING(15)
        },
        igclassp: { // FOREIGNKEY for RAAKAAINELUOKKA.THSCODE
          type: DataTypes.STRING(15)
        },
        fuclass: { // FOREIGNKEY for RUOANKAYTTOLUOKKA.THSCODE
          type: DataTypes.STRING(15)
        },
        fuclassp: { // FOREIGNKEY for RUOANKAYTTOLUOKKA.THSCODE
          type: DataTypes.STRING(15)
        }
      },
      {
        sequelize,
        tableName: 'elintarvike',
        freezeTableName: true,
        timestamps: false
      }
    )
  }

  // static associate() {
  //   this.hasMany(Customergroup, {
  //     foreignKey: 'idgroup',
  //     sourceKey: 'id'
  //   })
  // }
}
