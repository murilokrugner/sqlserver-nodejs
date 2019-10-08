/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VO3010', {
    VO3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO3_SEQINC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO3_FATPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_TIPTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VO3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO3_GRUITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VO3_CODITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    VO3_QTDREQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_PROREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO3_VALPEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_CODTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO3_PERDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_DEPINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO3_DEPGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VO3_NUMNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VO3_SERNFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO3_DATFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO3_HORFEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_DATDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO3_HORDIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_DATCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO3_HORCAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_FUNFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_NOSNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO3_NUMRRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    VO3_PECINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VO3_CODSEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VO3_CONSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    VO3_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VO3_LOTECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VO3_NUMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VO3_CODCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_NUMOSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO3_CODSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO3_VALLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    VO3_ITENFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO3_PEDXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VO3_ITEXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_DOCSDB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    VO3_LIBVOO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO3_PEDNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_PEDITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VO3_VECREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VO3_QTD2UM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VO3_CODVSJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VO3_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'VO3010'
  });
};
