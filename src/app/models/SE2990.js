/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE2990', {
    E2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E2_PORTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_NOMFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E2_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_VENCREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_ISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_IRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_NUMBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E2_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_BAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_BCOPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_EMIS1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_HIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    E2_LA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E2_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E2_MOVIMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    E2_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_MULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_JUROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_CORREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_VALLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_VENCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_VALJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PORCJUR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_NUMBOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_FATPREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_PROJETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_CLASCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E2_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_DTVARIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_VARURV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_VLCRUZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_DTFATUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_ACRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_TITORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_IMPCHEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PARCIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_ARQRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_OCORREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_IDENTEE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PARCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_ORDPAGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_DESDOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_INSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PARCINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_NUMLIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_BCOCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_AGECHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E2_CTACHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E2_DATALIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_APROVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E2_TIPOFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_FLAGFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_ANOBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E2_MESBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_SDACRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_DECRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_SDDECRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_USUALIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    E2_MULTNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_PROJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PLLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E2_DIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E2_MODSPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_IDCNAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E2_PARCCSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_RETENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_CONTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E2_CODORCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_SEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PARCSES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_FILDEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_FORNISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_LOJAISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E2_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E2_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_COFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_CSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PARCCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PARCPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PARCSLL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_TITPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_TITCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_TITCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_TITINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_VRETPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_VRETCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_VRETCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PRETPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PRETCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PRETCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_SEQBX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                '
    },
    E2_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_BASECSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_VRETISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_VENCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_VBASISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_MDRTISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_VARIAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_MDCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E2_MDREVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_MDPLANI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_MDCRON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_MDPARCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_FRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_TXMDCOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_APLVLMN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_CLEARIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_HORASPB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E2_PRETIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_SEFIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_TRETISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_VRETIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PLOPELT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E2_CODRDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_PARCFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_FETHAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_FORORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_LOJORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_DTDIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_TITADT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_TITPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_INSSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_CODAGL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_PROCPCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E2_FORNPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    E2_USUASUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    E2_USUACAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    E2_DATASUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_DATACAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_LIMCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_BASEIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_DATAAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_NODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E2_MDBONI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_FATFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_CODAPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_VRETINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_RETCNTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_MDMULT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PARCAGL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_MDDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_PRETINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_TEMDOCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_STATLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_FATLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_CIDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_DIACTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E2_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    E2_TIPOLIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E2_PARIMP5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_MSIDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E2_CODRCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E2_PARIMP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_DTBORDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E2_CODINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E2_PARCCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_CODRCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E2_PARIMP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PARIMP4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_IDDARF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    E2_PARIMP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_CODRPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    E2_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_PRINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E2_PRISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E2_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E2_INDPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_PARCFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_FABOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E2_PARCFAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E2_AGLIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E2_FACS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SE2990'
  });
};
