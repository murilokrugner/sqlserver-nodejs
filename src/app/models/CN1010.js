/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CN1010', {
    CN1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN1_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CN1_MEDEVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_MEDAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_LMTMED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN1_PRDALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CN1_TPMULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_CROFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_MULMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_TPLMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_ESPCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_CROCTB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_CTRFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_VLRPRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_ALINSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN1_ALQTIR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN1_ALQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN1_ALCOFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN1_ALCSLL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CN1_GRPAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN1_CTRDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_CTRAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_GRPSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CN1_CREALM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_CREAJM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_CTRMED: {
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
    CN1_ALCCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN1_TPSFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CN1010'
  });
};
