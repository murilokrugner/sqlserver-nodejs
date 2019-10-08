/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYS_BCAST_PACKAGE_01', {
    PCK_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PCK_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    PCK_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PCK_DTCRIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PCK_HRCRIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PCK_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PCK_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'SYS_BCAST_PACKAGE_01'
  });
};
