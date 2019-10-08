/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFD010', {
    VFD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFD_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VFD_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VFD_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VFD_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    }
  }, {
    tableName: 'VFD010'
  });
};
