/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUE010', {
    NUE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUE_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    NUE_DATATS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUE_CPART1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CPART2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CGRPCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUE_CCASO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CATIVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUE_UTL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_UTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_HORAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUE_HORAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUE_TEMPOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_TEMPOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_CRETIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUE_CLTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CFASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUE_CTAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUE_CTAREB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUE_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUE_COBRAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUE_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUE_DATAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUE_HORAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUE_DESC: {
      type: "VARBINARY",
      allowNull: true
    },
    NUE_ALTDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUE_CUSERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CMOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUE_VALORH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_CMOED1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUE_VALOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_VTSANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_CPREFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUE_COTAC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_COTAC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUE_TSDIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUE_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    NUE_ANOMES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUE_CCATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUE_CDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUE_ACAOLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUE_CCLILD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CLJLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUE_CCSLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_PARTLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUE_CMOTWO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUE_OBSWO: {
      type: "VARBINARY",
      allowNull: true
    },
    NUE_CDWOLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
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
    tableName: 'NUE010'
  });
};
