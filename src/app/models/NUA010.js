/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUA010', {
    NUA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUA_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUA_CTPREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUA_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUA_CLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'NUA010'
  });
};
