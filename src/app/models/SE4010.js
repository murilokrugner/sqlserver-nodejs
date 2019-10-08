/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE4010', {
    E4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E4_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    E4_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E4_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_DESCFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_DIADESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_FORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E4_ACRSFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_SOLID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_ACRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_PERCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_SUPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_INFER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_FATOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E4_JURCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_CTRADT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_AGRACRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E4_LIMACRS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E4_CCORREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    },
    E4_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SE4010'
  });
};
