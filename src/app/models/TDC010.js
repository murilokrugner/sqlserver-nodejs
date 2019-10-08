/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TDC010', {
    TDC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDC_CODFMR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDC_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TDC_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDC_CODPNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDC_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TDC_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TDC_MMOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDC_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TDC_LIBRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TDC_MMNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDC_CODOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDC_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'TDC010'
  });
};
