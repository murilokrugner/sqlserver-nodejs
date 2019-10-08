/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACT010', {
    ACT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACT_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACT_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACT_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACT_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACT_FORMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACT_TPRGNG: {
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
    tableName: 'ACT010'
  });
};
