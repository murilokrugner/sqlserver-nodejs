/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEK010', {
    QEK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEK_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEK_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEK_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_ENTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_LOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QEK_LOTINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QEK_HRENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QEK_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_TAMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_TAMAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_LOTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_DIASAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QEK_ITEMPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QEK_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEK_DOCENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    QEK_NTFISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QEK_SERINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QEK_DTNFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QEK_TIPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEK_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEK_CERFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEK_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QEK_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_SOLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QEK_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_VERIFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_NNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEK_PLAMO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_TAMA11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_ACEI11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_REJE11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_TAMA12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_ACEI12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_REJE12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_PLAMO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEK_TAMA21: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_ACEI21: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_REJE21: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_TAMA22: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_ACEI22: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_REJE22: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEK_CERQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEK_OPCION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_DTCAEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEK_SKLDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    QEK_IDENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_IDEINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_ALTESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    QEK_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_MOVEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEK_NNCINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEK_DATALU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_HORALU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QEK_RESPLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QEK_CHAVE1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_SITENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEK_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEK_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
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
    QEK_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'QEK010'
  });
};
