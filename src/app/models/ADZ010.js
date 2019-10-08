/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADZ010', {
    ADZ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADZ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADZ_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADZ_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ADZ_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADZ_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADZ_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADZ_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADZ_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_PRCTAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_TPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADZ_DT1VEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADZ_ITEMOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADZ_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADZ_PROPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADZ_FOLDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADZ_ITPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADZ_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADZ_PMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    ADZ_PRDALO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADZ_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADZ_PMSVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADZ_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADZ_ITEMVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADZ_CODAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADZ_CODNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ADZ_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADZ_PERREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_QTDREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADZ_DIASEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'ADZ010'
  });
};
