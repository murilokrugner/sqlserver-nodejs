/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSS0003', {
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    PROCESSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    SEQUENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    STATUS: {
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
    }
  }, {
    tableName: 'TSS0003'
  });
};
