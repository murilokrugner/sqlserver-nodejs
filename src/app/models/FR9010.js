/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FR9010', {
    FR9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FR9_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FR9_DOCUM: {
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
    tableName: 'FR9010'
  });
};
