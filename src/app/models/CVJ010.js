/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVJ010', {
    CVJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVJ_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVJ_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVJ_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'CVJ010'
  });
};
