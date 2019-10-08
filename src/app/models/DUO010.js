/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUO010', {
    DUO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUO_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUO_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUO_CLIAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUO_LOJAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUO_CNDFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUO_FOBDIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_CUBAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_BASFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_TIPFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUO_CPVENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_RESCPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DUO_VALMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_QTDCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_SEPPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_SEPEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DUO_SEPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_SEPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_CDOCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUO_TAXCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_SEPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DUO_PESCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_NFCTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_AJUOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_SEPREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_AGRNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_SEPENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUO_RECFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_TPDIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_PGREEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_REENT1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_REENT2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_REENT3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_REENT9: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_MAXREE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_VLRFIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_PRIREE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_PGREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_REFAT1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_MDCREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_PGARMZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_PERCOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_PERMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_MINARM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_MAXARM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_MDCARM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_MDCREE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_PRCPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_DOCFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DUO_PAGTDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_SEPSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_FTCUBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_MINREE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DUO_EDIAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_EDILOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_EDIFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_PGPEDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_OPECOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUO_OPEENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUO_BASREE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_ESTAGR: {
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
    DUO_AGEAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_INCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_TPCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_RRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUO_AGECON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DUO010'
  });
};
