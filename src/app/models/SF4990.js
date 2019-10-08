/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SF4990', {
    F4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CREDICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CREDIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DUPLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ESTOQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    F4_CFEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_TEXTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    F4_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_PODER3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_LFICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_LFIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DESTACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_INCIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_COMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_IPIFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_LFISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_NRLIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_UPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CONSUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_FORMULA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_AGREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_INCSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CIAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DESPIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_LIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                '
    },
    F4_ATUTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ATUATF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TPIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_STDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_BSICMST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_CREDST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_DESPICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_SITTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_PISCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PISCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TESDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_IPILICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_MOVPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ICMSDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TESP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_QTDZERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_SLDNPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DEVZERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TIPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TRFICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TESENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_OBSICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_OBSSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PICMDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_SELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ISSST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_FINALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    F4_PISFISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CONTSOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_COP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F4_INDNTFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CODBCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_AJUSTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DESPCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_BCRDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_FRETAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_COFDSZF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRPRELE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_CTIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_AGRCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TRANFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_REGDSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PISDSZF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_BCRDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_AFRMM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ICMSST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_BENSATF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DSPRDIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_COFBRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PISBRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_MKPCMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRPRST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_AGRPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DESPPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_LFICMST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_RETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_OPEMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_CRDPRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_AGRRETC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_IPIPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TPPRODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CPPRODE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_TESE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_DESCOND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CREDACU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TEMDOCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CROUTSP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_AGRDRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_VARATAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_COMPONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_REGESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_BENDUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CFABOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ATACVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRDACUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_BSRURAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CSOSN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_CFPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F4_IVAUTIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_ESTCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_ICMSTMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_MOVFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CODDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F4_REDANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_CPRESPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_VENPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRPRSIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_CRDTRAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_PERCMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_NUMDUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F4_PSCFST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CFACS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ISEFECP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_APLIIVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_OPERSUC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_APLREDP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_APLIRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_IPIOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_VDASOFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ANTICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TIPODUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRPREPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_CRPRERO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_TABGIAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_CRPRESP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_PAGCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CSTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_CALCFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_MOTICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PCREDAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_BCPCST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CODLEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    F4_CROUTGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_FRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ALSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_TIPOTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CLFDSUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_RGESPST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRLEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PAUTICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRPREPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_INTBSIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CRICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_RGESPCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PR35701: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_DBSTIRR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F4_STCONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CSTCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_DUPLIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_COMPRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_REDBCCE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_BONIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_ART274: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TRANSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CODPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_REFATAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_TABGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F4_AGREGCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_PRZESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_DBSTCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_MKPSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F4_CSTISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F4_VLAGREG: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    F4_MSGLT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SF4990'
  });
};
