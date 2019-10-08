/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SZ4010', {
    Z4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Z4_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Z4_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    Z4_CREDITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Z4_PERCENT: {
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
    Z4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SZ4010'
  });
};
