/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDB010', {
    RDB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDB_CODAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_CODADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_CODDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_TIPOAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDB_DTIAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDB_DTFAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDB_CODMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_ITECOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_CODNET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_CODQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RDB_CODALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDB_ESCALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDB_ITEESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDB_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDB_RESOBT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDB_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    RDB_CODJUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'RDB010'
  });
};
