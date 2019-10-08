/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDJ010', {
    RDJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_CODPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDJ_CODOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDJ_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDJ_CODDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDJ_ITOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RDJ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RDJ_SEQITM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDJ_DATITM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDJ_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDJ_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDJ_ESCREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_ITESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_ESCATG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_ITESAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_ITATCN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_ESCCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_ITECOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_ITECOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDJ_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDJ_TPCURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RDJ_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    RDJ_DURACA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDJ_VALOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    RDJ_AUTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDJ_CODDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDJ_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDJ_VERITM: {
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
    },
    RDJ_RESULT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDJ_DTCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'RDJ010'
  });
};
