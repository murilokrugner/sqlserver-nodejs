/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DTR010', {
    DTR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTR_FILVGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_NUMVGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTR_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_CODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTR_CODRB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTR_CODRB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTR_QTDEIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_INSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_VALPDG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_CREADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTR_LOJCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_NOMCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DTR_ADIFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_TABCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTR_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTR_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_FRECAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTR_REBTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTR_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTR_HORINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTR_DATFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTR_HORFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTR_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTR_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_QTEIXV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_VALRB1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_VALRB2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_CALRB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTR_CALRB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTR_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_PRCTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTR_OPERPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTR_PERADI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_CODRB3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTR_VALRB3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_CALRB3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTR_CIOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    DTR_TIPCRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTR_CODCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTR_PRVFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTR_TITPDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTR_ORIPDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DTR_TITADI: {
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
    tableName: 'DTR010'
  });
};
