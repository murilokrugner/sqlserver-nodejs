/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FVH010', {
    FVH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FVH_TIPODC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FVH_SECAO: {
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
    tableName: 'FVH010'
  });
};
