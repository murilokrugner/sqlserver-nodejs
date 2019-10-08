/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WF7010', {
    WF7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WF7_PASTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    WF7_REMETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_ENDERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_TEMPO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WF7_POP3SR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_POP3PR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WF7_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    WF7_SMTPSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_SMTPPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WF7_AUTUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_AUTSEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    WF7_MAPISR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_MAPIPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WF7_IMAPSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_IMAPPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WF7_TCONEX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    WF7_DNOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_DCONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_DSENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    WF7_DTELEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    WF7_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
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
    WF7_SSL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    WF7_SMTPSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    }
  }, {
    tableName: 'WF7010'
  });
};
