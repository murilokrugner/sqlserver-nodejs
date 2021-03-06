/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGK010', {
    GK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GK_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GK_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GK_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    GK_GRAPROV: {
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
    tableName: 'SGK010'
  });
};
