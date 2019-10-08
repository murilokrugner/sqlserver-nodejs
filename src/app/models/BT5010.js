/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BT5010', {
    BT5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BT5_CODINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BT5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BT5_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    BT5_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BT5_DATCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    BT5_TIPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BT5_ANTCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    BT5_COBNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BT5_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BT5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BT5_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    BT5_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BT5_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BT5_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BT5_VENCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BT5_INTERC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BT5_MODPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BT5_TIPOIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BT5_ALLOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BT5_OPEINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BT5_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    BT5_INFANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BT5_TIPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BT5_BCOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BT5_AGECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BT5_CTACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BT5_PORTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BT5_AGEDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BT5_CTACOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BT5_COBJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BT5_TAXDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BT5_JURDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BT5_MAIORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BT5_PODREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BT5_DIASIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BT5_CODTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BT5_CODSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    BT5_CODANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    }
  }, {
    tableName: 'BT5010'
  });
};
