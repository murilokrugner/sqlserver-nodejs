/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SA2010', {
    A2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A2_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A2_NR_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A2_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_CONTPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A2_COD_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A2_IBGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    A2_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_CX_POST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A2_PFISICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A2_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A2_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A2_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A2_INSCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    A2_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A2_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A2_SWIFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A2_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RISCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A2_MATR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_MCOMPRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_METR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_MSALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_NROCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_PRICOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_ULTCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_SALDUP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_DESVIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_SALDUPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A2_TIPORUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_ID_FBFN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    A2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_ATIVIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    A2_ORIG_1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_ORIG_2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_ORIG_3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_VINCULA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_REPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                    '
    },
    A2_REPCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A2_REPRTEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A2_REPRFAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_REPR_EM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_REPR_EN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                    '
    },
    A2_REPBAIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_REPRMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_REPREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_REPRCEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_REPPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_ID_REPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_REPR_BA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_REPR_AG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_REPR_CO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A2_REPRCGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A2_RET_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_COMI_SO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    A2_HPAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_CONTCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A2_FABRICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_FATAVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_DTAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_DTVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_RECINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TELEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A2_MNOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_CODPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_TPESSOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_TPISSRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_CODLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_RECCIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_GRPTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_UNFEDRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_CONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A2_CLIQF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A2_PLGRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_CODBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_PAISORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A2_ROYALTY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TXTRIBU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_B2B: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_PLCRRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_PLFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_SIGLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    A2_CONREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A2_DATBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_PLPEDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_CBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    A2_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    A2_CIVIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_ROYMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_SATIV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_PAGAMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_ENDCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    A2_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_GRPDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_SUBCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TIPAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RECSEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_FILDEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_RECPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RECCSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RECCOFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_ABICS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    A2_CODFAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_LOJFAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_NUMDEP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_CALCIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_VINCULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_DTINIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_DTFIMV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_CODADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_NIFEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    A2_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_TPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_IMPIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_PAISEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_RECFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CTARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_PRSTSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_MJURIDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RFABOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CPFIRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    A2_REGESIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CODINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    A2_INSCMU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_SIMPNAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RFACS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_NEMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    A2_NUMEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_RNTRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A2_ESTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A2_POSEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    A2_TRBEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_CONFFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TPREX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_DTFIMR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_FILTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_DTRNTRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_DTINIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_ENDNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_COMPLEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    A2_CIDEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A2_FOMEZER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_MUNSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A2_COMPLR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    A2_LOGEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    A2_INCLTMG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TELRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A2_CGCEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    A2_FRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_MINIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_BREEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_IRPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CODSIAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    A2_BAIEX: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    A2_INCULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CPOMSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TPLOGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_SITESBH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CCICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TRIBFAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TIPCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CONTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RETISI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_ISICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_INDRUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_UFFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_ISSRSLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_SUBCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RFASEMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RIMAMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A2_TPRNTRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_EQPTAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_STRNTRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CALCINP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_RFUNDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_OCORREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_CODNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    A2_CODFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    A2_DTCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_FORMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_RESPTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_TPCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_LOCQUIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_PAGGFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_APOLICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    A2_FORNEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_DVAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_DVCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A2_MSBLQD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_INOVAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_NOMRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    A2_MINPUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_REGPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_MOTNIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_DEDBSPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A2_DESPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_DRPEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A2_RECFMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    A2_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    A2_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SA2010'
  });
};
