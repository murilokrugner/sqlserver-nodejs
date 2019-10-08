/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STY010', {
    TY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TY_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TY_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TY_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TY_HORAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TY_DATAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TY_HORAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TY_POSINI1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_POSFIM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_POSINI2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_POSFIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_QUANTI1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_QUANTI2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_ULTCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_VARDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_DTUTAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TY_QUANTID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_FATOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TY_TIPOPRO: {
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
    }
  }, {
    tableName: 'STY010'
  });
};
