/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MG8010', {
    MG8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MG8_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MG8_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    MG8_INIVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MG8_FIMVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MG8_GRPLAY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MG8_ADMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MG8_PRDSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MG8_TESSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MG8_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MG8_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MG8_PRDSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MG8_MESSF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MG8_RDMAKE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MG8_TPPREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MG8_TPXPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MG8_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    MG8_REGRA: {
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
    tableName: 'MG8010'
  });
};
