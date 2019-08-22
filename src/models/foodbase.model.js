import Sequelize from 'sequelize'
import { Componentvalue } from './componentvalue.model'
import { Food } from './food.model'

export class Foodbase extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        foodid: {
          type: DataTypes.INTEGER(11),
          primaryKey: true
        },
        foodname: { type: DataTypes.STRING(115) },
        enerc: { type: DataTypes.DECIMAL(8,2) },
        choavl: { type: DataTypes.DECIMAL(8,2) },
        fat: { type: DataTypes.DECIMAL(8,2) },
        prot: { type: DataTypes.DECIMAL(8,2) },
        alc: { type: DataTypes.DECIMAL(8,2) },
        fibc: { type: DataTypes.DECIMAL(8,2) },
        oa: { type: DataTypes.DECIMAL(8,2) },
        sugoh: { type: DataTypes.DECIMAL(8,2) },
        starch: { type: DataTypes.DECIMAL(8,2) },
        sugar: { type: DataTypes.DECIMAL(8,2) },
        frus: { type: DataTypes.DECIMAL(8,2) },
        gals: { type: DataTypes.DECIMAL(8,2) },
        glus: { type: DataTypes.DECIMAL(8,2) },
        lacs: { type: DataTypes.DECIMAL(8,2) },
        mals: { type: DataTypes.DECIMAL(8,2) },
        sucs: { type: DataTypes.DECIMAL(8,2) },
        psacncs: { type: DataTypes.DECIMAL(8,2) },
        fibins: { type: DataTypes.DECIMAL(8,2) },
        fol: { type: DataTypes.DECIMAL(8,2) },
        niaeq: { type: DataTypes.DECIMAL(8,2) },
        nia: { type: DataTypes.DECIMAL(8,2) },
        vitpyrid: { type: DataTypes.DECIMAL(8,2) },
        ribf: { type: DataTypes.DECIMAL(8,2) },
        thia: { type: DataTypes.DECIMAL(8,2) },
        vitb12: { type: DataTypes.DECIMAL(8,2) },
        vitc: { type: DataTypes.DECIMAL(8,2) },
        vita: { type: DataTypes.DECIMAL(8,2) },
        carotens: { type: DataTypes.DECIMAL(8,2) },
        vitd: { type: DataTypes.DECIMAL(8,2) },
        vite: { type: DataTypes.DECIMAL(8,2) },
        vitk: { type: DataTypes.DECIMAL(8,2) },
        ca: { type: DataTypes.DECIMAL(8,2) },
        fe: { type: DataTypes.DECIMAL(8,2) },
        id: { type: DataTypes.DECIMAL(8,2) },
        k: { type: DataTypes.DECIMAL(8,2) },
        mg: { type: DataTypes.DECIMAL(8,2) },
        na: { type: DataTypes.DECIMAL(8,2) },
        nacl: { type: DataTypes.DECIMAL(8,2) },
        p: { type: DataTypes.DECIMAL(8,2) },
        se: { type: DataTypes.DECIMAL(8,2) },
        zn: { type: DataTypes.DECIMAL(8,2) },
        fafre: { type: DataTypes.DECIMAL(8,2) },
        fapu: { type: DataTypes.DECIMAL(8,2) },
        famcis: { type: DataTypes.DECIMAL(8,2) },
        fasat: { type: DataTypes.DECIMAL(8,2) },
        fatrn: { type: DataTypes.DECIMAL(8,2) },
        fapun3: { type: DataTypes.DECIMAL(8,2) },
        fapun6: { type: DataTypes.DECIMAL(8,2) },
        f18d2cn6: { type: DataTypes.DECIMAL(8,2) },
        f18d3n3: { type: DataTypes.DECIMAL(8,2) },
        f20d5n3: { type: DataTypes.DECIMAL(8,2) },
        f22d6n3: { type: DataTypes.DECIMAL(8,2) },
        trp: { type: DataTypes.DECIMAL(8,2) },
        chole: { type: DataTypes.DECIMAL(8,2) },
        stert: { type: DataTypes.DECIMAL(8,2) }
      },
      {
        sequelize,
        tableName: 'base',
        freezeTableName: true,
        timestamps: false
      }
    )
  }

  static associate() {
    this.hasMany(Componentvalue, {
      foreignKey: 'foodid',
      sourceKey: 'foodid'
    })

    this.belongsTo(Food, {
      foreignKey: 'foodid',
      sourceKey: 'foodid'
    })
  }
}