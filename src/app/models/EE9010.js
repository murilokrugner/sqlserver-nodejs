/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EE9010', {
    EE9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_SEQEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_PREEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_COD_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE9_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_CODQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE9_QUADES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_CODPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE9_DSCPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE9_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE9_DSCTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE9_CODBEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE9_DSCBEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE9_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_FOLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_FABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_FALOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_DTPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE9_PRVPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE9_PART_N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_UNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_SLDINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_PRECO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_EMBAL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_PRECO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_PRECO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_QE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_PACKAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE9_QTDEM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_UNPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_UNPES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_PRECOI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_PSLQUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_PSBRUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_FPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_PRECO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_GPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE9_DPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE9_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE9_NLNCCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    EE9_NALSH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE9_PSBRTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE9_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EE9_DTRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE9_RE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE9_DTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE9_ATOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    EE9_SEQED3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE9_FINALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE9_NRSD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_RC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    EE9_DTAVRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE9_PRCTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_PSLQTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_HOUSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_REFCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_SEQSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_PRCINC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_NF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EE9_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE9_CODAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE9_PERCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_MAXCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_CODNOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE9_FASEDR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE9_QT_AC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_VL_AC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_ISENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE9_SALISE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE9_DESCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_INVPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE9_VLPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_CODUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_LC_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE9_SEQ_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_LOJUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_AGRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_AGSUFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_DTDDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE9_PRCUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_VLFRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_VLSEGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_VLOUTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_VLDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_MESFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_FATIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE9_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE9_VLSCOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE9_SEQRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE9_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    EE9_VLCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_DTQNCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE9_CATCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_DINTCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE9_PERIE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_BASIE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_VLRIE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE9_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE9_PCARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EE9_OBSPCA: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'EE9010'
  });
};
