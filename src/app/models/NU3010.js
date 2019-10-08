/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NU3010', {
    NU3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NU3_CCREDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NU3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NU3_CCOMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'NU3010'
  });
};
