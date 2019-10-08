/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SD2010', {
    D2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D2_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D2_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D2_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_ITEMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D2_TP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_NFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_SERIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_QTDEDEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALDEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ORIGLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALACRS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_IDENTB6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_SEQCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D2_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_COMIS1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_COMIS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_COMIS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_COMIS4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_COMIS5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D2_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_DESCZFR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D2_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_DTLCTCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_CUSFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_BASIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_SERIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_BASIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ITEMREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_BASIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ITEMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D2_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_LOJAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_ALQIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D2_ENVCNAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_ALIQINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ABSCINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PREEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TPDCENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ICMFRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_STSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_VALINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PROJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D2_EDTPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    D2_TASKPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    D2_LICITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_VARPRUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_VAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TIPOREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_QTDEFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_QTDAFAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TPESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_VALBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_REGWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_NUMCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_CUSRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CUSRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_CFPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_VALCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASECSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASETST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PRFDSUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CODROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_ABATISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PRUNDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_BASEPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQTST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ESTCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALTST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_DESCZFP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D2_DESCICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_DESCZFC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASECF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ABATMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_GRUPONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_VALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_UFERMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEIRR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ORDSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_DTFIMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_BASEFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_VALFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VLSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BSSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CODLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_ALSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ITLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_MARGEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CBASEAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D2_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQCSL: {
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
    },
    D2_VLINCMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PRINCMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VREINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BSREIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CRPRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ABATINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_OKISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D2_VCAT156: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VLIMPOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TOTIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_FCICOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    D2_09CAT17: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_16CAT17: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_IDCFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_ICMSCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_DIFAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VDDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_PDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VFCPDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQCMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_GRPCST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_SERMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D2_DFABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_SITTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D2_NFCUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D2_IDSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_IDSB5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_IDSBZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_IDSF4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_IDSF7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D2_ESTOQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D2_TOTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TOTFED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TOTMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_HREXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D2_VALCPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQCPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_FTRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VRDICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_INDICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ITEMGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_ORCGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D2_ALMTERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D2_PRODFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D2_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_SDOCREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_SDOCMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_SDOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_ALIFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_CSOSN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D2_BASECPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_NRECAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D2_PDDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALFCCMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFEEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASFEEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALFCPST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VFECPST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VOPDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALQFEEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ICMSDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_ALIQPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_VALPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_BASEPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D2_TPREPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SD2010'
  });
};
