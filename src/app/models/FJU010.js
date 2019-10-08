/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FJU010', {
    FJU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJU_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJU_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FJU_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJU_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJU_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJU_CART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJU_EMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJU_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJU_DTEXCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJU_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJU_VENREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJU_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJU_VLCRUZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJU_EMIS1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJU_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJU_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    FJU_TITPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    FJU_RECORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJU_FILPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJU_PREPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJU_NUMPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FJU_PARPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJU_TIPPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJU_FORPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJU_LOJPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJU_RECPAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'FJU010'
  });
};
