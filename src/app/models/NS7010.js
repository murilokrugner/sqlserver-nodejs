/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NS7010', {
    NS7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NS7_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NS7_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    NS7_CEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NS7_CFILIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NS7_RAZAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    NS7_CTINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    NS7_CTNAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    NS7_CCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    NS7_EMITEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NS7_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    NS7_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    NS7_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    NS7_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    NS7_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    NS7_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NS7_CPAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NS7_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NS7_CMUNIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NS7_SEPARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NS7_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NS7_DTINAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NS7_EMINFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NS7_EMINFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NS7_EMINFI: {
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
    }
  }, {
    tableName: 'NS7010'
  });
};
