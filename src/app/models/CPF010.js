/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CPF010', {
    CPF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPF_CODPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPF_DESPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPF_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPF_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPF_MODEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CPF_VIEW: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CPF_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPF_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPF_ATUFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CPF_PREEXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CPF_INSTRU: {
      type: "VARBINARY",
      allowNull: true
    },
    CPF_FICHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CPF_AFLUIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CPF_DESENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPF_DESSPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPF_DESPTG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'CPF010'
  });
};
