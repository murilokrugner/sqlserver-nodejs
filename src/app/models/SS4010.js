/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SS4010', {
    S4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    S4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_CODITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    S4_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    S4_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    S4_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_EX_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_EX_NBM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S4_TE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PICMENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_IMPZFRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_CONV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_TIPCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_ALTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_QE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PRV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_EMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CUSTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_UCALSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_UPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_MCUSTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_UCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_ESTSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_ESTFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_FORPRZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_PE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_TIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_LE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_LM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_TOLER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S4_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S4_FAMILIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_QB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_LOJPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_APROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_TIPODEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_FANTASM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_RASTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_UREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_DATREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_FORAEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_COMIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_MONO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_PERINV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_DTREFP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_GRTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_MRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_NOTAMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PRVALID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_NUMCOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CONINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_CONTSOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_IRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_FORMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_FPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_OPERPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_CONTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_DESC_P: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_DESC_GI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_DESC_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_VLREFUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_VM_I: {
      type: "IMAGE",
      allowNull: true
    },
    S4_ANUENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    S4_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_SITPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_FABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_BALANCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_TECLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_PRODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_TIPOCQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_SOLICIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_BASE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    S4_DESBSE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    S4_AGREGCU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_DESPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_QUADPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_NUMCQPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CONTCQP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_REVATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_CODEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_INSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_ESPECIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    S4_MAT_PRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_NALNCCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    S4_REDINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_NALSH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_ALADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_REDIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_TAB_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_GRUDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_REDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_REDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_DATASUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_PCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PCOFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_MTBF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_MTTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_FLAGSUG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CLASSVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_QTMIDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_VLR_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_ENVOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_QTDSER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_FAIXAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_NROPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_ISBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    S4_TITORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    S4_LINGUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_EDICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_OBSISBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    S4_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S4_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_EMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PESBRU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_TIPCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_FRACPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_INT_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_VLR_ICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_VLRSELO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CODNOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_CORPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_CORSEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_NICONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_ATRIB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_ATRIB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_ATRIB3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_REGSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_CPOTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_QTDACUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_QTDINIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_REQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_SELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_LOTVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    S4_USAFEFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_IAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_IPPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    S4_TNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    S4_DCRII: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_DCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S4_DCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_DCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    S4_COEFDCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_DIFCNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    S4_GRPNATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_DTFIMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_REFBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_TPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_FECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_UMOEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_UVLRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_TIPOBN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_VALEPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_FUSTF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_ESCRIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CODQAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    S4_PMACNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PMICNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_TALLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_GDODIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_PARCEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_VLR_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_GCCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_CCCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S4_CODPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_VM_PROC: {
      type: "IMAGE",
      allowNull: true
    },
    S4_VLCIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CRICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_QBP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PRODSBP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_LOTESBP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_MARKUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_DTCORTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_PRN944I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_CARGAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_PRINCMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_TRIBMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_ADMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    S4_PERGART: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_PR43080: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_RPRODEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_COFINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CRDEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_VLR_COF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_FRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_PRFDSUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_RETOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    S4_TIPVEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    S4_SELOEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    S4_PRODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_DESBSE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    S4_COLOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    S4_IVAAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_BASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    S4_RICM65: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_ALFUMAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_FETHAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_ESTRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_CALCFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_PAUTFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_REGRISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_CODANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_BASE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    S4_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    S4_AFETHAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CFEMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_TPDP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_VEREAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    S4_VIGENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    S4_CFEMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_CRDPRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CRICMST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_FECOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_FECPBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_AJUDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_ALFECOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_ALFECRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_ALFECST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_CFEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    S4_AFABOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_AFACS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_MEPLES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_PRDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    S4_REGESIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_RSATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_TFETHAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    S4_AFASEMT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_AFUNDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    S4_AIMAMT: {
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
    }
  }, {
    tableName: 'SS4010'
  });
};
