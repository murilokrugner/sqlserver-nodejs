/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EEC010', {
    EEC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_PREEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_PEDREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_DTPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_FIM_PE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_ENVAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_AMOSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_STTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EEC_MOTSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEC_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_IMLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_IMPODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EEC_ENDIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEC_END2IM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEC_REFIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EEC_EXLIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_INTERM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_LICIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EEC_DTLIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_COND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_CLLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_DIAS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_INCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_FOLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    EEC_EXPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_EXLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_CONSIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_COLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_BENEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_BELOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_BENEDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EEC_ENDBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEC_END2BE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EEC_CONDPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_CLOJAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_CLIENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_DIASPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_MPGEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_INCOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_VIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_DEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_URFDSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    EEC_URFENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    EEC_PAISDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_PAISET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_FRPPCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_FRPREV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_FRPCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_SEGPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DESPIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_PRECOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_EMBAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_CALCEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_CUBAGE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_PACKAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EEC_CONFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EEC_ONTHEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_QUANTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_UNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_NETWGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEC_GROSSW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEC_IDIOMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EEC_LC_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_SL_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_SL_EME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_PGTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_TIPCVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_VALCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_REFAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_INSCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_ENQCOX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ENQCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ENQCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ENQCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ENQCO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ENQCO4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ENQCO5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_DSCGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_CODOBP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_PESLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_PESBRU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_TOTPED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_TOTITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_REGVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EEC_OPCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EEC_LIMOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_GEDERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    EEC_GDRPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEC_DIRIVN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEC_SECEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_MRGNSC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_VLMNSC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_ANTECI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_VISTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_NPARC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_PARCEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_VLCONS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_COBCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_FINCIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DECPES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DECQTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DECPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_BRUEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_CODAGT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_DTFCPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_ETA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_TRSTIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_ETD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_ETADES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_EMBARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EEC_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_NRINVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_DTINVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DTSLNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DTSDFB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_VLNFC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DECAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_NRCTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_NRCTFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_NRCONH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_MAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_DTCONH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DTEMBA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_TOTVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DTSLPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DTSLIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_DTPALE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DTINSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_ARM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_ARLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_NRINSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_NRCTSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_ARMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EEC_NRAVSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_DTSEGU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_APLCSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEC_TRSDOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_DTLMDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_PEDFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_IN86: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_DTDCIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DTENDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_BCDCRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_BCEXRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EEC_COURIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EEC_COURI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EEC_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_LIBSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_STASIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_PEDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_PTINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_PEDEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_DTESTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_TSISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_DTEFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_MODEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_UNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_TIPEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_OICMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_SPOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EEC_VLFOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_NIOFFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EEC_EXL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_PTCROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_ID_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EEC_ID_EMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EEC_ID_LB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    EEC_FREEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_CODERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EEC_TITCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EEC_ETAHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ETB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_ETBHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_ETDHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_DLDRAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DLDRHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_DLCARG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EEC_DLCAHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EEC_TPDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_QTDEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_TOTFOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_TOTLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_INFGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_DESSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_INFCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EEC_VLRIE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EEC_EMFRRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EEC_RECALF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    EEC_STTDUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EEC_FOREXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EEC_OBSFOR: {
      type: "VARBINARY",
      allowNull: true
    },
    EEC_SITESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EEC_OBSSIT: {
      type: "VARBINARY",
      allowNull: true
    },
    EEC_ESPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EEC_OBSTRA: {
      type: "VARBINARY",
      allowNull: true
    },
    EEC_MOTDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EEC_OBSDIS: {
      type: "VARBINARY",
      allowNull: true
    },
    EEC_NRODUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    EEC_NRORUC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    }
  }, {
    tableName: 'EEC010'
  });
};
