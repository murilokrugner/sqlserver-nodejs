/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SED010', {
    ED_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ED_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ED_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ED_CALCIRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CALCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_PERCIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_CALCINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_PERCINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_CALCCSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CALCCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CALCPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_PERCCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_PERCCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_PERCPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ED_DEDPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_DEDCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_BASEINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_CALCSES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_BASESES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_PERCSES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_IRRFCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_BASEIRC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_INSSCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_DEBITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ED_CCD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ED_ITEMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ED_CLVLDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ED_CREDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ED_CCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ED_ITEMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ED_CLVLCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ED_DEDINSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_BASEIRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_CALCFET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_BASECOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_BASEPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_APURPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_APURCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_PCAPPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_PCAPCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_CALCCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_BASECID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_PERCCID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ED_USO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_GRPNAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ED_RATOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_INDCMLT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CSTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ED_INDRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ED_CSTCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ED_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ED_PERCIOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_REDPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_REDCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_TABCCZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ED_CODCCZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ED_GRUCCZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ED_JURCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_RINSSPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_DTFCCZ: {
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
    ED_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_RECDAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CDRECSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ED_CDRECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ED_NATMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ED_NATDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ED_CDDEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ED_NATJR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ED_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ED_DTINCLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ED_MOVBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_RECIRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_TPAPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CODRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ED_ESCRIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_GRPJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ED_JURSPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_RECFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_F100: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CMOEJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ED_TPCOJR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CFJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CPJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CRJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_BANCJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_CBANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ED_CAGENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ED_CCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ED_CCJURI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_RATJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ED_CALCINP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_PCCINDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ED_PERCINP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ED_PERAPOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SED010'
  });
};
