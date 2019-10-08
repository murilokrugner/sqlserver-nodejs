/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM010', {
    CRM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CRM_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CRM_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CRM_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CRM_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                   '
    },
    CRM_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    CRM_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CRM_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CRM_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CRM_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CRM_MAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CRM010'
  });
};
