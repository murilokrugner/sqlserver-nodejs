/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIX010', {
    FIX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FIX_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FIX_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FIX_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FIX_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FIX_CODPAR: {
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
    },
    FIX_OBS1: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'FIX010'
  });
};
