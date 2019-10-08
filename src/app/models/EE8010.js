/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EE8010', {
    EE8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE8_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_COD_I: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE8_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_CODQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE8_QUADES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_CODPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE8_DSCPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE8_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE8_DSCTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE8_CODBEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE8_DSCBEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EE8_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_FOLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_FABR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_FALOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_SLDINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_UNIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_EMBAL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE8_QE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_UNPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_QTDEM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PRVPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_PRECO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PRECO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PRECO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_DTPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_PART_N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE8_PRECO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PRENEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_DTPREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_PRECOI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PRCTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_SLDATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_UNPES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_PSLQUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PSLQTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PSBRUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_FPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_GPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE8_PSBRTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_DPCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EE8_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE8_DTQNCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_TPONCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_NLNCCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    EE8_REFCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE8_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE8_CF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EE8_PRCINC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_NALSH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE8_FATIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_CODAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE8_PERCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_STA_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE8_SEQ_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EE8_MESFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_RV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EE8_DTCOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_DTRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_DTFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_STFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE8_QTDLOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_LOTECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EE8_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE8_NUMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_DTVALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_DTVCRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_CODNOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE8_ORIGV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_DIFERE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_INVPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE8_LC_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE8_PRCUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_VLPAG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_SEQ_LC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_VLFRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_VLSEGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_VLOUTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_VLDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_DIFE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EE8_ITEMGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EE8_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EE8_CODOPE: {
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
    EE8_VLCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_PEDERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EE8_SLDELI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EE8_DTELIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EE8_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    EE8_MOP: {
      type: "IMAGE",
      allowNull: true
    },
    EE8_ATOCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    }
  }, {
    tableName: 'EE8010'
  });
};
