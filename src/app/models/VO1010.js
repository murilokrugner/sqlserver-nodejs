/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VO1010', {
    VO1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO1_NUMOSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    VO1_PLAVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VO1_CODFRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_CHAINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_FABMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_NUMBOX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO1_CODCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_PRISMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO1_KILOME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO1_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_PROVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_LOJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO1_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_FATPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO1_DATABE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_HORABE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO1_DATSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_HORSAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO1_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_HORENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO1_FUNABE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_TEMGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_TEMLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_TEMCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_MECREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_SITGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO1_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO1_CRMOK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_TEMFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_NUMLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_FORPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO1_APOLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VO1_SINIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VO1_CODBCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO1_NROAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VO1_FRANQU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO1_DATATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_HORATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO1_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VO1_CDMOT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO1_NUMAGE: {
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
    VO1_TPATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_HORTRI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO1_GARMUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO1_DATSTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO1_HORSTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'VO1010'
  });
};
