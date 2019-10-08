/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NT0010', {
    NT0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NT0_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NT0_CGRPCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NT0_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NT0_CLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_CPART1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NT0_RELPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NT0_CMOE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_CESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NT0_CRELAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NT0_CIDIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_DTINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT0_USRINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NT0_CTPHON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NT0_DESPES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_SERTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_ENCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_ENCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_ENCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_CONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_CMOELI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_VLRLI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_SALDOI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_VLRLIF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_DTBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT0_CMOEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_VLRBAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_PERFIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_PEREX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_TPCEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_LIMEXH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_PERCD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_PARFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_FINAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_FIXEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_TPFX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_CALFX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_FXENCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_FXABM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_COPFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    NT0_DESPAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_TPERCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_DTREFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT0_DTREFF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT0_QTPARC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT0_DIAEMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_DISCAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_TITFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    NT0_DTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT0_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_TPVDIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_VALDIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_TPCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_PERCOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_CINDIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_OBS: {
      type: "VARBINARY",
      allowNull: true
    },
    NT0_PARCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_DESPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NT0_CFXCVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_CTBCVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_CTIPOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NT0_PONUMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    NT0_CFACVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_CEXCVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_VALORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NT0_DATAAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NT0_CASPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_SERVIC: {
      type: "VARBINARY",
      allowNull: true
    },
    NT0_CASMAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NT0_CCLICM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NT0_CLOJCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NT0_CCASCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    }
  }, {
    tableName: 'NT0010'
  });
};
