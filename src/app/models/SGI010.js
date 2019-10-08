/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGI010', {
    GI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GI_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GI_PRODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GI_PRODALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    GI_TIPOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GI_FATOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GI_MRP: {
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
    tableName: 'SGI010'
  });
};
