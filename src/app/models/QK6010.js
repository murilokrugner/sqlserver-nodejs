/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QK6010', {
    QK6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QK6_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QK6_ENTER1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK6_ENTER2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK6_ENTER3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK6_SEVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_CLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_ENTER4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK6_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_ENTER5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK6_DETEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_NPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QK6_ENTER6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK6_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QK6_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_ENTER7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK6_RSEVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_ROCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_RDETEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_RNPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QK6_CHAVE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_CHAVE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_CHAVE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_CHAVE4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_CHAVE5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_CHAVE6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_CHAVE7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK6_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QK6_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QK6_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK6_DATEEF: {
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
    }
  }, {
    tableName: 'QK6010'
  });
};
