/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB5010', {
    DB5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB5_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DB5_FILDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB5_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DB5_FILABA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB5_PRIORI: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'DB5010'
  });
};
