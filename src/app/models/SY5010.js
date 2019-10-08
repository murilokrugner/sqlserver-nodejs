/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SY5010', {
    Y5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y5_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y5_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    Y5_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    Y5_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Y5_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Y5_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    Y5_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y5_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Y5_CX_POST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    Y5_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    Y5_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Y5_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    Y5_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    Y5_REPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                     '
    },
    Y5_CPF_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Y5_NRCPFCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    Y5_REG_REP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    Y5_REF_BCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    Y5_SEQ_GIP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Y5_TIPOAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    Y5_HPAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Y5_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    Y5_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y5_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Y5_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    Y5_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    Y5_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    Y5_INSCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    Y5_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y5_LOJAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y5_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y5_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y5_SCAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    Y5_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    Y5_CODIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
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
    tableName: 'SY5010'
  });
};
