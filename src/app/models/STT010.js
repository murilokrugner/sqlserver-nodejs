/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STT010', {
    TT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TT_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_SEQRELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TT_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_TIPOREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TT_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TT_QUANREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_QUANTID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_UNIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TT_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TT_OBSERVA: {
      type: "IMAGE",
      allowNull: true
    },
    TT_DTINICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TT_HOINICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TT_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TT_HOFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TT_REPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TT_PCTHREX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_ETAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TT_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TT_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TT_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TT_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TT_QTDGARA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_UNIGARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TT_LOCGARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_LOCAPLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_GARANTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TT_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_ITEMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TT_NUMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_ITEMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TT_SEQUEOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TT_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TT_SERVICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_SEQMAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_POSCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_POSCON2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_USACALE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TT_TIPOHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TT_SEQUENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TT_SEQRMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TT_NOTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TT_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TT_SEQTARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TT_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TT_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TT_ORIGNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TT_NUMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_ITEMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TT_HREXTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TT_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TT_PERMDOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    TT_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'STT010'
  });
};
