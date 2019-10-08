/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBE990', {
    BE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BE_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BE_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BE_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BE_CAPACID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    BE_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BE_ALTURLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    BE_LARGLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    BE_COMPRLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    BE_PERDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    BE_CODZON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BE_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BE_ESTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BE_CODCFG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BE_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BE_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BE_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BE_EXCECAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BE_DATGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BE_HORGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BE_IDETIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BE_DTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'SBE990'
  });
};
