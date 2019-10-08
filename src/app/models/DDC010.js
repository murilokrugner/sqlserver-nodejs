/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DDC010', {
    DDC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDC_NCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DDC_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDC_CODNEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DDC_TPCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_INIVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DDC_FIMVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DDC_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_AGEVIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_BACRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_CRIRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_PRORAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_TIPOKM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_PERCUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDC_CRDVFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_CRDVDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_ADIDOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DDC_CRDVHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_VALCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_SRVCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DDC_ALTVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_CMPOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_CBRCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_BLQCOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DDC_DEVTRE: {
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
    tableName: 'DDC010'
  });
};
