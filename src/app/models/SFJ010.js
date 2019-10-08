/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFJ010', {
    FJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJ_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJ_DATREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FJ_DIASSUG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FJ_TIPPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ_CUSUNIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ_GRUPODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FJ_GRUPOAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FJ_CLASSIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                           '
    },
    FJ_SOLICIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJ_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FJ_MES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJ_TIPGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJ_FORNECE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FJ_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJ_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJ_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJ_GRUDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                   '
    },
    FJ_FORPED: {
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
    }
  }, {
    tableName: 'SFJ010'
  });
};
