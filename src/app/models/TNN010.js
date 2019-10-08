/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNN010', {
    TNN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNN_MANDAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNN_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_DTTERM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TNN_ELEICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_CONVOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_COMISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_COPEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_INSCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_EDITAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_INSCRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_ELEICR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_RESULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_CURCIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_COSIND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_POSSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_CALREU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_REGURT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNN_FILRE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNN_MATRE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNN_FILRE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNN_MATRE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNN_HORAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNN_HORAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNN_VOTOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNN_FILPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNN_VTNULO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNN_PRESID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNN_VTBRAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNN_FILSEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNN_SECRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNN_OCORRE: {
      type: "IMAGE",
      allowNull: true
    },
    TNN_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TNN_FILPSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNN_PRESES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNN_FILSSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNN_SECSES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNN_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    TNN_CODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'TNN010'
  });
};
