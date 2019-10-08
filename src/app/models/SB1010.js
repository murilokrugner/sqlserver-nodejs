/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SB1010', {
    B1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    B1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_CODITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    B1_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B1_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B1_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_EX_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_TE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PICMENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_IMPZFRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_CONV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TIPCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ALTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_QE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PRV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_EMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CUSTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_UCALSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_UPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_MCUSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_UCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_ESTSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_ESTFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_FORPRZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_PE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_LE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_LM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_TOLER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_FAMILIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_QB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_LOJPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_APROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_TIPODEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_FANTASM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_RASTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_UREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_DATREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_FORAEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_COMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_MONO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_DTREFP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_PERINV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_GRTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_MRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_NOTAMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PRVALID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_NUMCOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CONINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_CONTSOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_IRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_FORMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_FPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B1_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_OPERPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_CONTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_DESC_P: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_DESC_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_DESC_GI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_VLREFUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ANUENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    B1_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_SITPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_FABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_BALANCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_TECLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_PRODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_TIPOCQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_SOLICIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_DESPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_DESBSE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    B1_BASE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    B1_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_AGREGCU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_QUADPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_NUMCQPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CONTCQP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_REVATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_INSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CODEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_ESPECIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    B1_MAT_PRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_REDINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_NALNCCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    B1_NALSH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_REDIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_ALADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_TAB_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_GRUDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_REDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_REDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_DATASUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_PCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PCOFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_MTBF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_MTTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_FLAGSUG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CLASSVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_QTMIDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_VLR_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_ENVOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_QTDSER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_FAIXAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_NROPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_ISBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B1_TITORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    B1_LINGUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_EDICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_OBSISBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    B1_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_EMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PESBRU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TIPCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_FRACPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_INT_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_VLR_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_VLRSELO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CODNOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_CORPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_CORSEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_NICONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_ATRIB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_ATRIB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_ATRIB3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_REGSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_CPOTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_QTDACUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_QTDINIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_REQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_SELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_LOTVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B1_USAFEFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_IAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_IPPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_SITTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_TNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B1_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_VLR_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PMACNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_UMOEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_QBP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_DIFCNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    B1_DCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_CCCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_TALLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_CODPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CODQAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    B1_DCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_FECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PARCEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_GDODIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_VLCIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_GCCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_DTFIMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_CRICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ESCRIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_COEFDCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PMICNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_MARKUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_GRPNATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_FUSTF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_PRODSBP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_VALEPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_DTCORTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_DCRII: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_DCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B1_REFBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_LOTESBP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TIPOBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_UVLRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_FRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CALCFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ALFUMAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_REGRISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_CSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_IVAAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_COFINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_DESBSE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    B1_FETHAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_PRN944I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_PRINCMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CARGAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ADMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B1_BASE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    B1_PRODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CRDEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_RICM65: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_PRFDSUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_RETOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_PR43080: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PAUTFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TIPVEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_VLR_COF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    B1_SELOEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_PERGART: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_ESTRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_COLOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B1_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_TRIBMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_CODANT: {
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
    B1_MFORTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CRICMST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ALFECOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_ALFECST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_FECOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_VIGENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_CRDPRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_PRDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B1_AFETHAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_AFACS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_AFABOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TFETHAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_REGESIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_AJUDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ALFECRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_VEREAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_RSATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_RPRODEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CFEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CFEMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_CFEMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TPDP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_FECPBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_MEPLES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_X_CLPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B1_X_DCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    B1_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    B1_CEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B1_GRPCST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B1_AFASEMT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_AIMAMT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_AFUNDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_INTEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B1_USERLGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    B1_USERLGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    B1_HREXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_MOPC: {
      type: "IMAGE",
      allowNull: true
    },
    B1_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B1_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B1_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    B1_PORCPRL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B1_IMPNCM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_GRPTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B1_AFAMAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B1_TERUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SB1010'
  });
};
