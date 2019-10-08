/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FKF010', {
    FKF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FKF_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FKF_CPRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKF_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FKF_TPREPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FKF_INDSUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKF_INDDEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FKF_TPSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FKF_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FKF_ORIINS: {
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
    }
  }, {
    tableName: 'FKF010'
  });
};
