/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AH2010', {
    AH2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH2_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AH2_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH2_LOJAFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH2_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH2_FXINIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_FXFINA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_DESCMI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_PERCRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_VALREG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_PRBRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH2_TIPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH2_TIPOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH2_DESCCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH2_ICMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH2_IPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH2_COFINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AH2_OUTROS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_FAIXAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_FAIXAM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_GAREXE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AH2_USRFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    AH2_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AH2_SEQCON: {
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
    tableName: 'AH2010'
  });
};
