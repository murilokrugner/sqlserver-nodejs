/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('F0R010', {
    F0R_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0R_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0R_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F0R_INDICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'F0R010'
  });
};
