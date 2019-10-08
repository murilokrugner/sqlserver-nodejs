/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CCY010', {
    CCY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCY_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CCY_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CCY_TOTCRD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_CREDUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_CRDISP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_REFER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CCY_UTIANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_LEXTEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CCY_MES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCY_REANTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_COANTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_RESSA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCY_COMP: {
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
    CCY_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CCY_ORICRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CCY_CONSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CCY_RESCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CCY010'
  });
};
