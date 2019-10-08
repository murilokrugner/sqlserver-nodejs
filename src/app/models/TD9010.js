/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TD9010', {
    TD9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TD9_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TD9_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TD9_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TD9_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TD9_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TD9_ESTRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TD9_CODNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TD9_CODFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TD9_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TD9_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    TD9_ORDEM: {
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
    tableName: 'TD9010'
  });
};
