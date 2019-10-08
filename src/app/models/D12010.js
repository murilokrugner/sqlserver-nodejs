/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('D12010', {
    D12_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D12_LOTECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D12_NUMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D12_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D12_CODVOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_IDVOLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_IDUNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    D12_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D12_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_CARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D12_HRGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D12_SEQPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    D12_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D12_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D12_ORDTAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_ATIVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D12_ORDATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_TM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D12_QTDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D12_QTDOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D12_QTDMOV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D12_QTDMO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D12_QTDLID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D12_QTDLI2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D12_LOCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_ENDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D12_LOCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_ENDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D12_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D12_HORINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D12_DATFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D12_HORFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D12_RHFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    D12_RECHUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_RECFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    D12_ANOMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_IDDCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_MAPSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_MAPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_MAPTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_RECCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_RECEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_ENDCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D12_OCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D12_QTDERR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D12_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    D12_IDOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    D12_SEQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_PRDORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    D12_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D12_LIBPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_RADIOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_MNTVOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_ORDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_ATUEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_AGLUTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_DISSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D12_IMPETI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_PRAUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_LOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_BXESTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    D12_UNIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'D12010'
  });
};
