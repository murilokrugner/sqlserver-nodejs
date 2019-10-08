/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TFF010', {
    TFF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFF_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFF_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFF_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFF_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFF_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFF_PERINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFF_PERFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFF_HORAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TFF_HORAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TFF_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TFF_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFF_SEQTRN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFF_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TFF_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_ESCALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFF_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFF_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFF_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFF_CONREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFF_CALCMD: {
      type: "VARBINARY",
      allowNull: true
    },
    TFF_CODSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFF_LUCRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_TXLUCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_ADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_TXADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_COBCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFF_NARMA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_NCOLE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_PERMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_VLRMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_TOTMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFF_INSALU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFF_GRAUIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFF_PERICU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFF_ENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFF_CHVTWO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    TFF_ITCNB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFF_PLACOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFF_PLAREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFF_TESPED: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TFF010'
  });
};
