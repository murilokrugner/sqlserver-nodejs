/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TFI010', {
    TFI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFI_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFI_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFI_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFI_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFI_TPCOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFI_SEPSLD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFI_PERINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFI_PERFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFI_HORAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TFI_HORAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TFI_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFI_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFI_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TFI_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFI_SEPARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_CODPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFI_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TFI_CONREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFI_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFI_CODSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFI_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFI_CODTGQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFI_ITTGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TFI_CODATD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFI_ENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_ENTEQP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFI_COLEQP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TFI_APUMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_OSMONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_CONENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_CONCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_CHVTWO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    TFI_SRVEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TFI_ITCNB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFI_CALCMD: {
      type: "VARBINARY",
      allowNull: true
    },
    TFI_PLACOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TFI_PLAREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TFI_TESPED: {
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
    tableName: 'TFI010'
  });
};
