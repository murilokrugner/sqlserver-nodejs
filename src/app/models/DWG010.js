/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DWG010', {
    DWG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWG_TIPVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DWG_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWG_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DWG_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DWG_TAXABE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DWG_CODPOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DWG_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DWG_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DWG_CODPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWG_VALATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DWG_CNEGCT: {
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
    tableName: 'DWG010'
  });
};
