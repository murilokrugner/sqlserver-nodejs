/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N12010', {
    N12_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N12_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    N12_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N12_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N12_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N12_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N12_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N12_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N12_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N12_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N12_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N12_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N12_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N12_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N12_HPAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N12_CXPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'N12010'
  });
};
