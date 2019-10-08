/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUL010', {
    DUL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUL_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUL_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DUL_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUL_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUL_SEQEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DUL_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DUL_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DUL_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DUL_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUL_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUL_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DUL_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUL_TDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUL_CODRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUL_LOJRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUL_NOMRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DUL_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    DUL_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    DUL_CODSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DUL_OLDSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUL_GIASP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'DUL010'
  });
};
