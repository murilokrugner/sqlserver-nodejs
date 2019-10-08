/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNB010', {
    TNB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNB_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNB_CODEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNB_COMBO: {
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
    tableName: 'TNB010'
  });
};
