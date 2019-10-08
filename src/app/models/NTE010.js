/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NTE010', {
    NTE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NTE_CAJURI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NTE_CFLWP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NTE_CPART: {
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
    tableName: 'NTE010'
  });
};
