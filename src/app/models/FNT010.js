/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FNT010', {
    FNT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNT_CODIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNT_REVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FNT_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNT_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FNT_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNT_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNT_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNT_DTVLDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNT_CURVA: {
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
    tableName: 'FNT010'
  });
};
