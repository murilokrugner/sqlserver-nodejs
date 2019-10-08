/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAJ010', {
    AJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJ_GRCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AJ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJ_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AJ_US2NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AJ_COTACAO: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SAJ010'
  });
};
