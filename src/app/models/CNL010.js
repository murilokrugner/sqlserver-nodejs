/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNL010', {
    CNL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNL_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNL_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CNL_LMTAVS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNL_MEDEVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_MEDAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_CTRFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_VLRPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_CROCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_CROFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_TPLMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_TPMULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_MULMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_LMTMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNL_CRALM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_CREAJM: {
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
    },
    CNL_TPSFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_PLSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_NIVAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNL_ALCMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNL_CODAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'CNL010'
  });
};
