/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EE7010', {
    EE7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_PEDFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE7_DTPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_DTPEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_AMOSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_FIM_PE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_DTSLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_ENVAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_DTAPCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_STTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE7_TABPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EE7_MOTSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE7_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_IMLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_IMPODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE7_ENDIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EE7_END2IM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EE7_REFIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EE7_EXLIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_LICIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE7_DTLIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_INTERM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_CLLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_DIAS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_COND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE7_INCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_FOLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_RESPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    EE7_EXPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_EXLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_CONSIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_COLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_BENEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_BELOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_BENEDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE7_ENDBEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EE7_END2BE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EE7_CONDPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE7_DIASPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_MPGEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_INCOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_VIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_DEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_PAISET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_PESLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_PESBRU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_TOTITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_TIPSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_FRPPCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_FRPREV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_FRPCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_SEGPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_TEMLC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_TOTPED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_DESPIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_PRECOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_EMBAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE7_CALCEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_DTPGAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_CUBAGE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_IDIOMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EE7_SL_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_LC_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE7_SL_EME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_PGTANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_TIPCVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_VALCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_REFAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE7_DSCGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_CODOBP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE7_BRUEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_QTD40H: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_QTD20: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_INTEGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_QTD40: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_DECQTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_DECPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_DECPES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_FUMIGA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_UNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_CODBOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE7_MODEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_OPCFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_CONDFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE7_KEY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_DSCORG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_VLFOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_SPOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_ID_CR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE7_ID_AP: {
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
    EE7_FREEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_TPDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_PEDERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE7_TOTFOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_TOTLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE7_DESSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE7_DTSLAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE7_DTAPPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'EE7010'
  });
};
