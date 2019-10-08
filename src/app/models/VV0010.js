/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VV0010', {
    VV0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_NUMTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV0_TIPFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_OPEMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_DATMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_ESTCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_GRUMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV0_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VV0_CORVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_PLAVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV0_DATEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_VCARCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_EMPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_CODGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    VV0_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VV0_VALMOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_ACESSO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_OPCION: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DESACE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALNEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALCOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_IMPOST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_TOTENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_PERDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_FORPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_AGEFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_CODBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV0_CODAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    VV0_TOTICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_NUMLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_TABFAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_SITNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_VBAICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_CODTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_OBSMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_CLIFTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_EXPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_LOJFTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_NNFFDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV0_SNFFDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_AUTFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_DATUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV0_TRADEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV0_VALPAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DEVTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV0_NNFCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV0_CRMOK1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_CRMOK2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_PESQLJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_CATVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_AGREGA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DTHEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                   '
    },
    VV0_VALFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_TIPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_ALIICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_CODAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_LOJAAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_CLIALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_LOJALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_NUMNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV0_SERNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_DPGFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_DPGVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_CRECON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_SEQVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_VALRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_MODVDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_DIA1PC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_CLFINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_LJFINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_TIPFTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_CFINAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VV0_DATAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_FIXDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_SEQFTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_VDAFUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_NFINAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    VV0_FPGFTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_VALFPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_DTIFPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_D1PFPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_PARCEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_INTFPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_FIXFPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_DIAFPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_JURFPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_PREBFN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALREB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_TACLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_SUBFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_TACSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_TACFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_VALTAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_INTERV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DIAFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_DATVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_HORVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VV0_PERCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_PARFPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_COMFTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_SNFCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_PERREP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_REPFTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_CLICSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_LOJCSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_TXAFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_COEFIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DPGGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_PTXRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VTXRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_HISPGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    VV0_DPGSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_PCUSFN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_FILCHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_VCUSFN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_PCOMFN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VCOMFN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALTAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALTRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_TIPFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_BONEMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_ABCOAA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    VV0_NUMEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_CBCOAA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_DATEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_NUMOSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_NATFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV0_BASSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_TIPO: {
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
    VV0_TPFRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_MENNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    VV0_MENPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_USRAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_MESFPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    VV0_SIMVDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_TIPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_VENVDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VV0_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_INDPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_TIPOCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_CFFINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_VFFINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DFFINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_VRFINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_DRFINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_PESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_VOLUME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VV0_VEICUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VV0_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VV0_SDOCFD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_SDOCCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VV0_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VV0_LOJENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VV0_FLUXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VV0_GERFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'VV0010'
  });
};
