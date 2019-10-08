/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CZE010', {
    CZE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZE_CDMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CZE_CDAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CZE_LGOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CZE_SQAB: {
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
    tableName: 'CZE010'
  });
};
