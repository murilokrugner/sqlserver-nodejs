/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DC3010', {
    DC3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DC3_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DC3_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DC3_REABAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DC3_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DC3_TPESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DC3_CODNOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DC3_DESPIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DC3_PERREP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC3_QTDUNI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC3_EMBDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC3_PERAPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC3_NUNITI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC3_TIPPER: {
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
    DC3_TIPREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC3_TIPSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC3_TIPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC3_PRIEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DC3_ENDMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DC3_UMMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DC3010'
  });
};
