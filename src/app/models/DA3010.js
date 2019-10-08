/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DA3010', {
    DA3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA3_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DA3_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA3_MUNPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DA3_ESTPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_CAPACN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_CAPACM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_VOLMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_MOTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA3_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA3_LIMMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_QTDUNI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_UNITIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA3_CODGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DA3_ALTINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_LARINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_COMINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_ALTEXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_COMEXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_LAREXT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_FILATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_FILVGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_NUMVGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA3_FROVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA3_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    DA3_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA3_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_MARVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_CORVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_ANOMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DA3_ANOFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DA3_CHASSI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DA3_TIPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_QTDEIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA3_VEIRAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA3_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA3_RENAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    DA3_FILBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_TARA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DA3_TIPGRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    DA3_TPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_TPCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_CODFAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA3_LOJFAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA3_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DA3_LIBSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DA3_DTIVSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA3_DTFVSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'DA3010'
  });
};
