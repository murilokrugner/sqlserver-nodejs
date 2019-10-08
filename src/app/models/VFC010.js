/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFC010', {
    VFC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFC_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VFC_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFC_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VFC_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VFC_GRUITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VFC_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VFC_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VFC_DATFIN: {
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
      defaultValue: '((0))',
      primaryKey: true
    }
  }, {
    tableName: 'VFC010'
  });
};
