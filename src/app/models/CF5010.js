/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CF5010', {
    CF5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF5_INDAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF5_PISCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF5_VALAJU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF5_CODAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF5_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CF5_DESAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CF5_DTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CF5_CODCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CF5_CODIGO: {
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
    },
    CF5_TIPATV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF5_CST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF5_BASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF5_ALQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF5_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CF5_INFCOM: {
      type: "IMAGE",
      allowNull: true
    },
    CF5_ALIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF5_BSCALC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF5_CODCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CF5_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF5_TPAJST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF5_TIPAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'CF5010'
  });
};
