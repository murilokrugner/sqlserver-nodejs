/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNB010', {
    CNB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNB_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNB_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CNB_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CNB_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNB_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_REALI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_DTREAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_VLTOTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_VLUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_VLTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_VLDESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_CODMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNB_DTANIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_CONORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CNB_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CNB_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_DTPREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_QTDMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CNB_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_RATEIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_ITSOMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_PRCORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_QTDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_QTRDAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_QTRDRZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_QTREAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_VLREAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_VLRDGL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_PERCAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_FILHO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_SLDMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNB_ITEMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CNB_QTDSOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_SLDREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_FLGCMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_TE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_COPMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_ULTAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_PROXAV: {
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
    CNB_ITMDST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_RJRTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CNB_ITEMCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CNB_GCPIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNB_GCPLT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_PEDTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_BASINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_GERBIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CNB_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CNB_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_TABPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNB_CODNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CNB_ITEMNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNB_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CNB_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_PARPRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNB_PRIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_DTREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_PROXRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNB_IDPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_MODORJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNB_PROITN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CNB_PROREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNB_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNB_PRODSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CNB_FLREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CNB010'
  });
};
