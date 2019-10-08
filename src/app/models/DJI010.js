/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DJI010', {
    DJI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_CODPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_VALPAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_VALIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_VALTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_FILDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DJI_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DJI_ITEMD2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_NUMCOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_NUMAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DJI_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DJI_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DJI_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_SEQTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_DESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_ACRESC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_CALMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DJI_CODCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_LOJCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_DIGAWB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DJI_PERRAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DJI_DATGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DJI_HORGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DJI_FILVGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_SEQGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DJI_TIPCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DJI_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DJI_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DJI_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DJI_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_CLIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_LOJREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_CLICAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DJI_LOJCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DJI_DEVFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DJI_QTDUNI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_BASSEG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_METRO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DJI_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DJI_DT6STA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DJI_CODNEG: {
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
    tableName: 'DJI010'
  });
};
