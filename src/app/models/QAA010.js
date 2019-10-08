/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QAA010', {
    QAA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QAA_TPUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QAA_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QAA_APELID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QAA_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QAA_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QAA_INICIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QAA_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QAA_LOGIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    QAA_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_RECMAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_TPMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QAA_DISTSN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_TPRCBT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_TPWORD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_RECFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QAA_AUDIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QAA_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QAA_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QAA_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QAA_PARTIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QAA_RECUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QAA_OPERAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QAA_OFFLIN: {
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
    QAA_SITQNC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'QAA010'
  });
};
