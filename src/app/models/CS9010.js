/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CS9010', {
    CS9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS9_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS9_CODPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS9_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    CS9_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CS9_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS9_CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS9_NIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    CS9_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS9_IE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS9_IEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS9_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CS9_IM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS9_SUFRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CS9_CODREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS9_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CS9_DTFIM: {
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
    }
  }, {
    tableName: 'CS9010'
  });
};
