/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLR010', {
    LR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LR_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LR_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VLRITEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LR_VENDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LR_VALIPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LR_DESCPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_PRCTAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LR_NLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LR_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LR_BCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    LR_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_RESERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_LOJARES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_PEDFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_EMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_PREMIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_ORCRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_ICMSRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ENTREGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_BRICMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALPS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALCF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASEPS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASECF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ALIQPS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ALIQCF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ITEMSD1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LR_PEDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_FDTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LR_CODCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_FDTMONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LR_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_VLDESRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_NUMORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_SITTRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LR_VALEPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LR_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_VDMOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_VDOBS: {
      type: "IMAGE",
      allowNull: true
    },
    LR_DESCORC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LR_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LR_QUALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LR_ESPECIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LR_ALQIMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_PEDSC5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_ITESC6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_GARANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LR_SOLCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_CODLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_ITLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_MSMLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_REMLPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_VLRCFID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_NUMCFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LR_PROCFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_DTSDFID: {
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
    LR_MESREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_LEGCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LR_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_VALACRS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LR_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_MODBC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LR_VLGAPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    LR_VLIMPOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_FCICOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    LR_CONTDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_SERPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LR_ECPRESN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_DOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_ECSEDEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    LR_PEDPRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_SERPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_ECMSGPR: {
      type: "IMAGE",
      allowNull: true
    },
    LR_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_CLILOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_VLTROCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_INDPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LR_TOTIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_FLUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LR_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LR_REV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_CEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_BLEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_GARDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LR_QTDEDEV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ITEMGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LR_ITEMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LR_PRDCOBE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LR_TOTMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_TOTFED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_TOTEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_SDOCPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LR_PREDIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ALIQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_KIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LR_ALQIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASEISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ECVALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ALQFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALFECP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_ALQCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ALIQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_VALIRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LR_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LR_IDITREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SLR010'
  });
};
