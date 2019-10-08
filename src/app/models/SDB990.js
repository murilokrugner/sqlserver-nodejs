/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDB990', {
    DB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DB_ESTORNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DB_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DB_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DB_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DB_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB_TM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DB_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DB_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DB_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DB_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DB_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DB_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB_EMPENHO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DB_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DB_EMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DB_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DB_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DB_ATIVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DB_RHFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DB_RECHUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_RECFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_OCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DB_ANOMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_ENDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DB_ESTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_CARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_ESTFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DB_DATAFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DB_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DB_UNITIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_ATUEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_ORDTARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_ORDATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_IDOPERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DB_SEQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_REGWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DB_MAPSEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_MAPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_ENDSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DB_QTDERRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DB_RECCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_RECEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DB_QTDORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DB_IDDCF: {
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
      defaultValue: '(0)',
      primaryKey: true
    }
  }, {
    tableName: 'SDB990'
  });
};
