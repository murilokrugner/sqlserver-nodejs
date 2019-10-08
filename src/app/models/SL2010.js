/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SL2010', {
    L2_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L2_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L2_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VLRITEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    L2_VENDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L2_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_DESCPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_PRCTAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_PREMIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L2_NLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L2_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L2_BCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    L2_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_RESERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_LOJARES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_PEDFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_EMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_ORCRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ENTREGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALPS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALCF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_BASEPS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_BASECF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ALIQPS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ALIQCF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ITEMSD1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_PEDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_FDTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_CODCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_FDTMONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_VLDESRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_NUMORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_SITTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    L2_VALEPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L2_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_VDMOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_VDOBS: {
      type: "IMAGE",
      allowNull: true
    },
    L2_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L2_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_DESCORC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L2_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L2_QUALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    L2_PEDSC5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_ITESC6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_SOLCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_SERPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    L2_CONTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    L2_CODLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L2_ITLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_MSMLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_REMLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_DTSDFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_NUMCFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    L2_VLRCFID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_PROCFID: {
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
    L2_MESREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L2_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_MODBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L2_LEGCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    L2_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_VALACRS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VLGAPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VLIMPOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_FCICOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    L2_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_ECPRESN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_ECSEDEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    L2_DOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_PEDPRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_SERPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_ECMSGPR: {
      type: "IMAGE",
      allowNull: true
    },
    L2_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_CLILOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_BLEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_VLTROCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_INDPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    L2_TOTFED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_FLUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    L2_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_REV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_CEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_TOTIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ITEMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_PRDCOBE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L2_TOTMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_TOTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_SDOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    L2_QTDEDEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ITEMGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    L2_GARDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    L2_PREDIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_BASCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_BASIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ALIQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ALQCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ALIQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    L2_ECVALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_KIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    L2_ALQFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_ALQIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_VALFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    L2_IDITREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SL2010'
  });
};
