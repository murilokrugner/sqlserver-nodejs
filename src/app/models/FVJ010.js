/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FVJ010', {
    FVJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FVJ_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FVJ_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    FVJ_PREDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FVJ_TIPO: {
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
    tableName: 'FVJ010'
  });
};
