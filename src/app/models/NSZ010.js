/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NSZ010', {
    NSZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_LCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_NUMCAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NSZ_TIPOAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_DTINCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_USUINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NSZ_CGRCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_LITISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_CESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NSZ_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NSZ_CAREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NSZ_CSUBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NSZ_CPART1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_CPART2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_CPART3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NSZ_PATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    NSZ_PPASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    NSZ_CPRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NSZ_TOMBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    NSZ_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_FPRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_CRITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_COBJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_DETALH: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_JUSTIF: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_CPROGN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_CANCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_USUENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    NSZ_PERENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_DTENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLFINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VAFINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_CMOENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_DETENC: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_PRETER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_ESTTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_DTCAUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOCAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLCAUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VACAUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_DTENVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLENVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VAENVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VLINES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_DTHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOHIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLHIST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VAHIST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_CPRHIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_CFCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_OBSERV: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_IDENTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_NUMREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_DTINVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_DTTMVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_REGULA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_RENOVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_ADITIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_DTADIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_OBJADI: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_CCLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NSZ_CSUBCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NSZ_DTCAPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLCAPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VLACAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_DTCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_INSMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_INSEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_NIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_FLAG01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_FLAG02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_DTULAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_PERMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_DTPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_DTJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLPROV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VAPROV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VCPROV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VJPROV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_SAPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_SJUIZA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_DTUASJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_DTUASP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_NOMEFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NSZ_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_CMUNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NSZ_CREGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_CDPSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_SOLICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NSZ_CRESCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_MULTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_OBSMUL: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_RESCIS: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_FPGTO: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_DTSOLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_CTIPMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_NOMEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NSZ_JUSTPR: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_SITREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_DTSITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CSITMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CNATMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_ESPECI: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_DTPROR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_SIGRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NSZ_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_DTCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_NUMLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_DTLICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLDOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_CMODLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_CCRIJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_DTCONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CTPSOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_DENOM: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_ALVARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NSZ_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NSZ_LOGRAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NSZ_LOGNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NSZ_COMPLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NSZ_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_ULTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_ALTPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_DESALT: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_OBJSOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NSZ_OPOSIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_CCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_LCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_CAREAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_CTPSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_CMOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_ELABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_CSBPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_PODER: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_DTASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_SUBEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_OBJCON: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_CODWF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NSZ_INDCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NSZ_CSTATL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_CSITUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_DTINLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_DTFILI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_OBSLIV: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_OBSLIR: {
      type: "IMAGE",
      allowNull: true
    },
    NSZ_VCENVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VJENVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_DTREAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_DTCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NSZ_CMOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NSZ_VLCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_VACONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_MULCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSZ_CCPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_HCITAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    NSZ_CCTFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NSZ_CDIVUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NSZ_MODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_TIPOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NSZ_SEGJUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'NSZ010'
  });
};
