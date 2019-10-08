/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVB990', {
    CVB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVB_CODCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVB_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVB_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CVB_CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    CVB_CRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CVB_ASSIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVB_QUALIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CVB_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVB_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVB_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CVB_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVB_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    CVB_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    CVB_COMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CVB_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVB_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVB_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVB_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CVB_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
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
    tableName: 'CVB990'
  });
};
