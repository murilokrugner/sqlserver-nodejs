/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NQR010', {
    NQR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NQR_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NQR_NOMRPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NQR_EXTENS: {
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
    }
  }, {
    tableName: 'NQR010'
  });
};
