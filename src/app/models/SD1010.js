/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SD1010', {
    D1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D1_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D1_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    D1_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_ITEMPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_DATACUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_NFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_SERIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_ITEMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_QTDEDEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALDEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ORIGLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_NUMCQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_DATORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_IDENTB6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_LOTEFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    D1_SKIPLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_BASEIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_SEQCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D1_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D1_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    D1_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    D1_ANOFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_MODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D1_COMBUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D1_COR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_EQUIPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_II: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    D1_CONHEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    D1_NUMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_ITEMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_CUSFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODCIAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_BASIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_SERIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_BASIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CBASEAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D1_ICMSCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ITEMREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_BASIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TIPO_NF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_ALQIMP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQIMP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQIMP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQIMP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQIMP6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_QTDPEDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEIRR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQIRR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIRR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_STSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_ENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D1_TPESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_PCCENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_REGWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_ITPCCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_QTPCCEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_TESACLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_NUMDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    D1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_DESCICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_GRUPONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_CRDZFM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_AVLINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_DFABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_ALIQCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CFPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_ITMVINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_ESTCRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_NFVINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_TNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASECSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_QTDCONF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODNOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_VALCF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ABATMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEFAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALACRS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASECF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PRUNDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_DTFIMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_CNATREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_SERVINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_VALPS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ABATISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_MARGEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ICMSDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_SLDDEP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQFET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CRPRSIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CONBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_VALFAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PRFDSUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_CRPREPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQII: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_GARANTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_BASEFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASESES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CRPRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ICMNDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TRANSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_CUSRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALSES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQFUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CUSRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_UFERMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQSES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODBAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_VALCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASNDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_RGESPST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_CUSRP3: {
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
    D1_VLINCMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PRINCMG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ABATINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALCMAJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_OKISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_X_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    D1_VLSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BSSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALSENAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALPMAJ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PROJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D1_CONIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_FCICOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    D1_IDCFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_VLCIDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASECID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQCIDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_DIFAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VDDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VFCPDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIQCMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_GRPCST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_VLSLXML: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D1_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    D1_ORDDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D1_NRECAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D1_VALFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_FILEDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_ALIFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALIFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASFASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PDDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_PERCINP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALINP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFUND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VRDICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALIMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALCPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASECPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQCPM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    D1_ITEMNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_EXPSOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_HREXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D1_IDSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_IDSB5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_IDSBZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_FTRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TRIBMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_ALFCCMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEINP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CSOSN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_IDSF4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_IDSF7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D1_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_ALMTERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_SDOCVNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_SDOCREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_SDOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_ALQFMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D1_SLDEXP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TESDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_ALIQCPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_ABATALM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ABATTRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQFEEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_IDDCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_BASFEEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASECPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALCPB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFEEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_TPREPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D1_VRETSUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D1_DESCZFP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_DESCZFR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BFCPANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_NFPNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D1_ALQFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_DESCZFC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VOPDIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQNDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CTROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D1_ALFCPST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_ALQFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VFCPANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEFMD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_BASEPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_CODSAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D1_VALPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_NFPSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D1_ITEROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D1_ALIQPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VFECPST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_AFCPANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_VALFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D1_X_NCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'SD1010'
  });
};
