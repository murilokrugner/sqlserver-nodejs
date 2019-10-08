/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BG9010', {
    BG9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG9_CODINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BG9_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BG9_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    BG9_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BG9_PODREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG9_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG9_EMPANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    BG9_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BG9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG9_NATURE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BG9_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BG9_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG9_VENCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BG9_USO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG9_MESREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG9_INDREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BG9_VALFAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BG9_TIPPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG9_BCOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BG9_AGECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BG9_CTACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BG9_PORTAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BG9_AGEDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    BG9_CTACOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    BG9_COBJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG9_FILESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG9_TAXDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BG9_JURDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BG9_MAIORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BG9_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    BG9_DESREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BG9_EMPFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG9_FILFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG9_DESEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    BG9_HSPEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BG9_DIASIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    BG9_REPASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG9_CODSB1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BG9_CODTES: {
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
    }
  }, {
    tableName: 'BG9010'
  });
};
