/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADK010', {
    ADK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADK_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADK_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADK_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADK_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADK_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADK_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADK_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ADK_TEL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ADK_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    ADK_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ADK_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADK_GRUNVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADK_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    ADK_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADK_CEPDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADK_CEPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADK_TIPSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADK_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ADK_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    ADK_RAZAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ADK_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADK_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADK_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ADK_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ADK_CORP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    ADK_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    ADK_LAZER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    ADK_USRESP: {
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
    }
  }, {
    tableName: 'ADK010'
  });
};
