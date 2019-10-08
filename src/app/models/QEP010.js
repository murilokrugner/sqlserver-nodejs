/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEP010', {
    QEP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEP_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEP_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEP_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEP_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEP_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEP_LOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEP_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_HRENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QEP_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QEP_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEP_TAMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_TAMAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_LOTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_DOCENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    QEP_NTFISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QEP_SERINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QEP_DTNFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QEP_TIPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QEP_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEP_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QEP_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEP_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QEP_ITEMPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QEP_CERFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEP_DIASAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEP_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEP_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEP_SOLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QEP_ERRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    QEP_DTIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_IMPFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEP_QTDETQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEP_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEP_DTLAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_INSPOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEP_EXCLUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEP_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QEP_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QEP_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    QEP_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'QEP010'
  });
};
