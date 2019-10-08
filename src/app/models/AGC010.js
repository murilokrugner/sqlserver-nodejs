/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AGC010', {
    AGC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AGC_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGC_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    AGC_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AGC_CODSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AGC_SEVCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AGC_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AGC_CODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGC_CODEFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGC_CODCAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGC_CODCAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGC_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AGC_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AGC_INIVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGC_FIMVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AGC_WFTEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'AGC010'
  });
};
