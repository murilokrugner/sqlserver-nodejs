/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DDA010', {
    DDA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDA_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DDA_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDA_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDA_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DDA_FATCUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_TABFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DDA_TIPTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDA_TABALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DDA_TIPALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDA_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_PESOM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_QTDVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_VALMER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_VALFIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_FIXVAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_PORTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_EDITMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_DIACOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    DDA_SRVCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DDA_BACRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_CRIRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_PRORAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_TIPOKM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_AGEVIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_PERCUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_CRDVFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_CRDVDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_ADIDOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDA_CRDVHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_VALCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_ALTVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_CMPOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_CBRCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_BLQCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDA_DEVTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'DDA010'
  });
};
