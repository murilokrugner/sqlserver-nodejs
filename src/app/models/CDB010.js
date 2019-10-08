/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CDB010', {
    CDB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDB_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDB_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CDB_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CDB_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CDB_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CDB_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CDB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CDB_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CDB_COMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CDB_SDOC: {
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
    tableName: 'CDB010'
  });
};
