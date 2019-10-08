/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NVL010', {
    NVL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVL_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NVL_CTIPOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'NVL010'
  });
};
