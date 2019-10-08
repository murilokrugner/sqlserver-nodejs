/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SB5010', {
    B5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_PRV2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PRV7: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CEME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    B5_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_CERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_COMPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_EMB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B5_EMB2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B5_ESPESS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ESTMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_LARG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_QE1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_QE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_QUAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    B5_CONVDIP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DTREFP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_CARPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_IDADEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DTREFP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_DTREFP7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_COMPRLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_LARGLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ALTURLC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_FATARMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EMPMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ROTACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CODCAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_CODZON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_UMIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_SERVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_SERVINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_SERVSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_LVLEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_LPSEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PERCUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_IMPGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_BENDL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PINSUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PORTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_NPULMAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PRODDNF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_INSUMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_VOLRECI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CODISRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_USOITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_LOCALI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_CONCENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DENSID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_FTIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_FTIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PROPOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PROPOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CRDEST1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_CRDEST2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_SERVEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_CALORIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TOTGOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TOTGORS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TOTGORT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_COR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_ALTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    B5_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_QUALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_ONU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B5_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_CODTP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_CMPEXTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_EAN141: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN142: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN143: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN144: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN145: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN146: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN147: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_EAN148: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TIPUNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_QTDVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_IMPETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_VLDOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_VLDREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_DTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CDDMDBA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_SITDIEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_DESCNFE: {
      type: "IMAGE",
      allowNull: true
    },
    B5_INSPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CODATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    B5_CODTRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B5_CODSERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B5_ISEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_TABINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_CODGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    B5_TPSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_AMMULTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_AMMULTS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ZFMULTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ZFMULTS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ALTTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_REGMAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B5_EMBAGRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_CODGNRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_NRECAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_INGATV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    B5_FORCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    B5_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    B5_CONCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    B5_PROJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_DESCSER: {
      type: "IMAGE",
      allowNull: true
    },
    B5_CTDACON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B5_REDALIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_INDPETR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_FCIPRV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_AM4PORC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ZF4PORC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_PROTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    B5_QEI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_QEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ECDESCR: {
      type: "IMAGE",
      allowNull: true
    },
    B5_ECENQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B5_ECPESOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ECALTEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_INTDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_DIASHL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_DIASHF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_REVPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_WMSEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_NATBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_SEMENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CULTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B5_DTDECRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_CTVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B5_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_PENE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B5_COMPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_FUNCEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_TPESOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_MARGPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_VLRCID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_VERIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B5_FORMMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PRZCQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ENDSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_NBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B5_ECEAN1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B5_ECSUBT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    B5_ISIDUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CDFATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_ECSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_NUMBEAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_DTDECAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_NATALBE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_ECLARGE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ECINDIC: {
      type: "IMAGE",
      allowNull: true
    },
    B5_NUMBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B5_ANOBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B5_BLQINVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_BLQINVD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_MONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_FPRZCQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_GRPIVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_DIASES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_AGLUMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_PROTOTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    B5_ECSEQ2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_CTRWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ENVMKT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ECCUBAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ECAPRES: {
      type: "IMAGE",
      allowNull: true
    },
    B5_ECBENFI: {
      type: "IMAGE",
      allowNull: true
    },
    B5_ECDTEX2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_ECIMGFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    B5_ECPCHAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    B5_ECDTLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_TPISERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ENDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_ENDREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_ENDDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_FORSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_CATMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_DEC7174: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ECDTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B5_CLAUBA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_TRATAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_UMPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_LEADTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ECCARAC: {
      type: "IMAGE",
      allowNull: true
    },
    B5_ECFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ECTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    B5_ECPROFU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_TPAPUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_CODFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_MARPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_CODLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    B5_ECCOMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_ECLARGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_SERVDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_SERVREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_GSLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_GSMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_GSMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_UMDIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B5_PERIOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B5_INSSPAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ECDESF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ENDECD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_ENDSCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B5_SERECD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_INDCPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_SERVTDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B5_VLZERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ARREQTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_ISDSHIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B5_SERSCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SB5010'
  });
};
