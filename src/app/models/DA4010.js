/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DA4010', {
    DA4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA4_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DA4_TIPMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA4_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA4_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_FILBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA4_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA4_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DA4_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DA4_MUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA4_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA4_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DA4_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA4_AJUDA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA4_AJUDA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA4_AJUDA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA4_NUMCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    DA4_REGCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DA4_DTECNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA4_DTVCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA4_MUNCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA4_ESTCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_CATCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA4_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DA4_MAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DA4_TELREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA4_FALCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA4_RG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA4_RGORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA4_RGEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_CORPEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_CORCAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_CORBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_COROLH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_SINAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DA4_ALTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA4_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA4_DATNAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA4_ESTCIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_NUMSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DA4_LIBSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DA4_VALSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA4_CARPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA4_BLQMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA4_COMISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA4_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA4_RGDT: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA4_IDOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DA4_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA4_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DA4_FILATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA4_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA4_DTIVSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA4_DTFVSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'DA4010'
  });
};
