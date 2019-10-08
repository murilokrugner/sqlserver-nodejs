/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNJ010', {
    CNJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNJ_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNJ_TPDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNJ_DESCTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CNJ_TPCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNJ_DESCTC: {
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
    tableName: 'CNJ010'
  });
};
