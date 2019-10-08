/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STL010', {
    TL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_SEQRELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_TIPOREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TL_USACALE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL_QUANREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_QUANTID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_UNIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_DESTINO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL_DTINICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TL_HOINICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TL_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TL_HOFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TL_REPFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL_PCTHREX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TL_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TL_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TL_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TL_ETAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_GARANTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL_LOCAPLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_NUMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_ITEMSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TL_NUMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_ITEMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL_SEQUEOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL_OBSERVA: {
      type: "IMAGE",
      allowNull: true
    },
    TL_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TL_SERVICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_SEQMAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_POSCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_POSCON2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_TIPOHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL_SEQUENC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TL_SEQRMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL_NOTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TL_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL_NUMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_ITEMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL_SEQTARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TL_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TL_ORIGNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL_HREXTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL_PERMDOE: {
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
    TL_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TL_CODAEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'STL010'
  });
};
