/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYC010', {
    YC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    YC_CARAC_F: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    YC_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    YC_IDIOMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    YC_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    YC_DESC_GI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    YC_COD_RL: {
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
    tableName: 'SYC010'
  });
};
