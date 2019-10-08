/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SU7010', {
    U7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U7_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U7_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    U7_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    U7_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    U7_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    U7_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U7_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U7_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U7_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    U7_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U7_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U7_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U7_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U7_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U7_TIPOATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U7_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    U7_HABIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U7_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    U7_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    U7_TAREFA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    U7_VALIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U7_CFGBTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                 '
    },
    U7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U7_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U7_AGENTID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    U7_PENDCHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U7_SUBSTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    U7_DTRODZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    U7_HRRODZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    U7_AGENTPW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    U7_ATURAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    U7_ASSCHI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SU7010'
  });
};
