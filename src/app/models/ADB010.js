/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADB010', {
    ADB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADB_NUMCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADB_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADB_DESPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ADB_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADB_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADB_TESCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADB_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADB_PRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADB_UNSVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADB_QTDENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_QTDEMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_PEDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADB_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADB_LOJCLI: {
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
    },
    ADB_CLACOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ADB_CULTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ADB_PENE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ADB_PREREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADB_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADB_CTVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'ADB010'
  });
};
