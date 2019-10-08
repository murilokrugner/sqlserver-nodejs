/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AH5010', {
    AH5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH5_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AH5_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH5_LOJAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH5_DTPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH5_FXFINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH5_QTDACU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH5_BASEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH5_PERCDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH5_VALORD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH5_PRECOU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH5_DATCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AH5_LICITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH5_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH5_SEQCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH5_CODANT: {
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
    }
  }, {
    tableName: 'AH5010'
  });
};
