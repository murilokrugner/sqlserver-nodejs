/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DWH010', {
    DWH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWH_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWH_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DWH_ITEDWG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWH_CODPOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DWH_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DWH_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DWH_CODPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWH_VALATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWH_CNEGCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'DWH010'
  });
};
