/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BQC010', {
    BQC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BQC_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    BQC_VERCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQC_CODINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BQC_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BQC_SUBCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    BQC_VERSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQC_DATCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BQC_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    BQC_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BQC_COBNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    BQC_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_PODREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BQC_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_PERCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_TPVCPP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_VENCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_TPVCCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_VENCCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_ALTVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_GRATUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_COBRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_COBRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_DIARET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_CONCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_ULTCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BQC_NUMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    BQC_PATROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_TIPBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CODBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQC_DATBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BQC_ANTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    BQC_VL2BOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BQC_MESREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_INDREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_PERREJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_CONTAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BQC_TIPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BQC_LOGRAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    BQC_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_COMPLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BQC_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BQC_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    BQC_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BQC_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_ENDCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BQC_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BQC_INFANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_EMICAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_OBRFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_PERCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_GRPCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BQC_OBRDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_EQUIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQC_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_RESCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_QUACOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_NPERRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_ABRQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CONSLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_LIMCH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_RPGPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_ENTFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_OUTLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_TIPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_REGFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_BCOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQC_AGECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BQC_REGGOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CTACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BQC_PORTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQC_GRUOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BQC_AGEDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BQC_CTACOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BQC_COBJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_TAXDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_JURDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_MAIORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_GUIPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CLAINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CODVE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_CRGPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BQC_MOTREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    BQC_CARREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_REALIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_NOMCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BQC_INFCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    BQC_AGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CODTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BQC_QTDUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_QTDPUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_UNIPUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_VERLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_PACOOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_LIQUID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_MESLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_VLRMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_PERMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_VLRPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_PERPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_QTSMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_PERPAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_CODPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_MDFTPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_DIASIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BQC_CODSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BQC_TABCOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BQC_BQDEFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_CEINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    BQC_RECANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BQC_CIE309: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BQC_SEASPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
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
    BQC_RAZSBE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'BQC010'
  });
};
