/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QK8010', {
    QK8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QK8_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QK8_NOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QK8_ENTER1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK8_ENTER2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK8_ENTER3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK8_SEVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_CLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_ENTER4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK8_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_ENTER5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK8_DETEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_NPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QK8_ENTER6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK8_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QK8_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_ENTER7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    QK8_RSEVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_ROCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_RDETEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_RNPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QK8_CHAVE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_CHAVE2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_CHAVE3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_CHAVE4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_CHAVE5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_CHAVE6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_CHAVE7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QK8_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QK8_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QK8_DATEEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QK8_ID: {
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
    tableName: 'QK8010'
  });
};
