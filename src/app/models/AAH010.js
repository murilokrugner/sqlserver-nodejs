/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AAH010', {
    AAH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAH_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AAH_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAH_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAH_TPCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAH_CLASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AAH_CONPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AAH_INIVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAH_FIMVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAH_CPAGPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AAH_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAH_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AAH_ULTPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAH_ULTEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAH_INICOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAH_FIMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAH_CODIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAH_PERREA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAH_ULTREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAH_CODGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAH_GRPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAH_ABRANG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAH_VALMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAH_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAH_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAH_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAH_REVPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAH_OCOROS: {
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
    AAH_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAH_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AAH_IMPLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'AAH010'
  });
};
