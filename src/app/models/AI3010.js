/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AI3010', {
    AI3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AI3_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI3_LOGIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    AI3_PSW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AI3_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AI3_ADMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AI3_SUPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI3_USRSIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI3_SKIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AI3_GRUPO: {
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
    AI3_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    AI3_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI3_CODTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    }
  }, {
    tableName: 'AI3010'
  });
};
