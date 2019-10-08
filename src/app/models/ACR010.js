/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACR010', {
    ACR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACR_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACR_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACR_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ACR_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ACR_LOTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACR_ITEMGR: {
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
    tableName: 'ACR010'
  });
};
