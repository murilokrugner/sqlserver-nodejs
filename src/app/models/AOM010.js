/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOM010', {
    AOM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOM_CODAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOM_CODNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AOM_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AOM_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOM_FILXML: {
      type: "IMAGE",
      allowNull: true
    },
    AOM_NIVPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AOM_IDINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'AOM010'
  });
};
