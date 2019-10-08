/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NJV010', {
    NJV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NJV_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NJV_UM1PRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NJV_CODSPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NJV_UM1SPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NJV_VALOR: {
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
    tableName: 'NJV010'
  });
};
