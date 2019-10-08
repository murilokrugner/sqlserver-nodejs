/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TFL010', {
    TFL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFL_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFL_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFL_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFL_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFL_TOTRH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFL_TOTMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFL_TOTMC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFL_TOTLE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFL_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    TFL_PLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFL_ITPLRH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFL_ITPLMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFL_ITPLMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFL_ITPLLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFL_CODSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFL_PEDTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFL_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFL_CONREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFL_MESRH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFL_MESMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFL_MESMC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFL_OBS: {
      type: "VARBINARY",
      allowNull: true
    },
    TFL_ENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFL_CALCMD: {
      type: "VARBINARY",
      allowNull: true
    },
    TFL_TOTIMP: {
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
    }
  }, {
    tableName: 'TFL010'
  });
};
