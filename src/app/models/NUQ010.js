/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUQ010', {
    NUQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUQ_CAJURI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NUQ_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NUQ_INSTAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUQ_INSATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUQ_CNATUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUQ_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NUQ_NUMANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NUQ_CTIPAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUQ_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUQ_CCOMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NUQ_CLOC2N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUQ_CLOC3N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUQ_CLOC4N: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUQ_CCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUQ_LCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUQ_CADVOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUQ_CDECIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NUQ_DTDECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUQ_OBSERV: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NUQ_EXECUC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUQ_DTEXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUQ_FLAG01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUQ_DTDIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUQ_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUQ_LCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUQ_NOMEFT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUQ_CTPSOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUQ_DENOM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NUQ_DTCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUQ_INSEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NUQ_INSMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NUQ_NIRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NUQ_ALVARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUQ_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NUQ_LOGRAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NUQ_LOGNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NUQ_COMPLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NUQ_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    NUQ_CMUNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NUQ_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NUQ_CCLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUQ_ANDAUT: {
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
    NUQ_DTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'NUQ010'
  });
};
