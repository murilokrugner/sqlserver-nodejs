/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CO3010', {
    CO3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO3_CODEDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO3_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO3_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CO3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CO3_VLUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO3_CLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO3_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CO3_CLAANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO3_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO3_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CO3_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO3_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO3_VALATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO3_VLRPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO3_PRZENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CO3_RANK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO3_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    CO3_REVOGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CO3_LANCE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO3_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO3_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CO3_PERCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO3_WINREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
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
    tableName: 'CO3010'
  });
};
