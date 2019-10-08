/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBS010', {
    BS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BS_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    BS_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BS_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    BS_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    BS_DESCPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    BS_ATIVO: {
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
    tableName: 'SBS010'
  });
};
