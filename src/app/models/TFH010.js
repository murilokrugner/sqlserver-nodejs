/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TFH010', {
    TFH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFH_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFH_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFH_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFH_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFH_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFH_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_PERINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFH_PERFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFH_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFH_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFH_SLD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_CODSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFH_LUCRO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_TXLUCR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_ADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_TXADM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_COBCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFH_VIDMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_DPRMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFH_CHVTWO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    TFH_ITCNB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFH_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFH_CONREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFH_TESPED: {
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
    tableName: 'TFH010'
  });
};
