/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DW7010', {
    DW7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DW7_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DW7_NUMPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DW7_PRZVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DW7_TIPPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DW7_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DW7_NUMPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DW7_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DW7_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DW7_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DW7_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DW7_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DW7_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_FATMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DW7_VALMER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DW7_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DW7_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DW7_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DW7_TAXEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DW7_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DW7_CODPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_CODREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    DW7_TIPPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DW7_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_USERDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_PRODIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DW7_FATCUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DW7_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_NOMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DW7_NUMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_USERAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW7_DATAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DW7_HORAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DW7_CNEGCT: {
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
    }
  }, {
    tableName: 'DW7010'
  });
};
