/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AA3010', {
    AA3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA3_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AA3_DTVEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_DTINST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_DTGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AA3_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AA3_CHAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AA3_CODTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    AA3_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA3_LOJAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_NFAQUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AA3_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA3_LOJAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_NFVEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AA3_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA3_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA3_DTCTAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_CTAPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA3_VLRCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AA3_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA3_ACUMUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_MTBF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_MTTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA3_DTEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_HORRP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_ULTNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA3_ULTSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AA3_QTREP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_QTFAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_ULTFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA3_ULTLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_QTREPH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_HORRPH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_ULTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_ULTPRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_QTFALH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_HOROPH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_HORDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_STAANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_DTREFH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_DIAOPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_DTMTBF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_DTMTTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_SITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA3_CODGRP: {
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
    },
    AA3_ENTEQP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_COLEQP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_CODLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_EQALOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA3_INALOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_FIALOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA3_MANPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA3_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AA3_EXIGNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA3_EQ3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA3_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA3_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AA3_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    AA3_OSMONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA3_CDBMFL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_FILLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA3_HMEATV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA3_HMESEP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_CONSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AA3_HMERET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA3_CONRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    AA3_HMELIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'AA3010'
  });
};
