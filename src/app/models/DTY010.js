/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DTY010', {
    DTY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_NUMCTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTY_DATCTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTY_HORCTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTY_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTY_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTY_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTY_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_VALPDG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_ADIFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_QTDDOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_QTDVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_IRRF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_SEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_INSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_ISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_QTDDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_DIAFIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_DOCSDG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTY_TIPCTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTY_VALPRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_QTDPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_QTDKM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_CODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTY_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTY_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_TABCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTY_CODFAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTY_LOJFAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_FILDEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_NUMPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTY_PIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_COFINS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_CSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTY_DATLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTY_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTY_BASIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_DTLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTY_CODMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTY_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTY_TIPUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTY_LOCQUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTY_FILLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_PARCTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTY_SOLFLG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_TAXBAN: {
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
    },
    DTY_VLACRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_VLDECR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_TIPFRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTY_PERCUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_TITFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTY_TITNDF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTY_IDOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DTY_VLSEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_VLSENA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_VLREEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTY_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'DTY010'
  });
};
