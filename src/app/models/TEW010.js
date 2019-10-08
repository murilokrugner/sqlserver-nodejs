/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEW010', {
    TEW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEW_CODMV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TEW_ORCSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TEW_CODEQU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEW_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TEW_BAATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TEW_FILBAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEW_DTSEPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TEW_DTRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TEW_DTRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TEW_NUMPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEW_ITEMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEW_NFSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TEW_SERSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TEW_ITSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEW_NFENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TEW_SERENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TEW_ITENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TEW_SUBSTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TEW_OBSMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TEW_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEW_DTAMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TEW_CODKIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TEW_TPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEW_KITSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEW_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEW_ITEMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEW_FECHOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TEW_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TEW_RESCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEW_ITAPUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEW_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TEW_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TEW_SDOCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TEW_SDOCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    TEW_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TEW_QTDRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TEW_QTDRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TEW010'
  });
};
