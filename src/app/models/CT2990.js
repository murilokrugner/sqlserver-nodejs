/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CT2990', {
    CT2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT2_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT2_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CT2_SBLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT2_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CT2_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT2_MOEDLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT2_DC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_DCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_DCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT2_MOEDAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CT2_HP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT2_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT2_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CT2_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CT2_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CT2_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CT2_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CT2_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CT2_ATIVDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT2_ATIVCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT2_EMPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT2_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT2_INTERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_IDENTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CT2_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT2_MANUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CT2_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT2_AGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT2_SEQHIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT2_SEQLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CT2_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT2_SLBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_DTLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT2_DATATX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT2_TAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT2_VLR01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT2_VLR02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT2_VLR03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT2_VLR04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT2_VLR05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    CT2_CRCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_CRITER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CT2_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CT2_SEGOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT2_DTCV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT2_SEQIDX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CT2_CONFST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_OBSCNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CT2_USRCNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CT2_DTCONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CT2_HRCONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT2_MLTSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_CTLSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CT2_CODPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CT2_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CT2_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CT2_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CT2_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CT2_AT01DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_AT01CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_AT02DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_AT02CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_AT03DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_AT03CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_AT04DB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CT2_AT04CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'CT2990'
  });
};
