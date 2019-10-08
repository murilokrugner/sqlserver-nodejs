/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CZY010', {
    CZY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CZY_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CZY_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CZY_NUMMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CZY_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CZY_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CZY_NUMPLA: {
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
    tableName: 'CZY010'
  });
};
