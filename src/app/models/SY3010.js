/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SY3010', {
    Y3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y3_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    Y3_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    Y3_LE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y3_DIVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'SY3010'
  });
};
