/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TFG010', {
    TFG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFG_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFG_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFG_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFG_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFG_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFG_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_PERINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFG_PERFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFG_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFG_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFG_CODSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFG_SLD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_LUCRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_TXLUCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_ADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_TXADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_COBCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFG_VIDMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_DPRMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_RESRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_CHVTWO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    TFG_VLATIV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFG_ITCNB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFG_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFG_CONREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFG_TESPED: {
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
    tableName: 'TFG010'
  });
};
