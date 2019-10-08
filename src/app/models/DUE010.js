/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DUE010', {
    DUE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUE_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DUE_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DUE_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUE_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUE_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DUE_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DUE_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    DUE_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DUE_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DUE_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DUE_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUE_PONREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DUE_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DUE_INSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    DUE_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DUE_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DUE_DATCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DUE_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_TIPCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_COLSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_COLTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_COLQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_COLQUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_COLSEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_COLSAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_COLDOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_HORCOI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DUE_HORCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DUE_CDRSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DUE_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DUE_CADPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DUE_USEPOR: {
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
    DUE_CODSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DUE_GIASP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    }
  }, {
    tableName: 'DUE010'
  });
};
