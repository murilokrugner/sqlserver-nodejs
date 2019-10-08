/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SX2010', {
    X2_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    X2_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    X2_MODOUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    X2_MODOEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    X2_TAMFIL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    X2_TAMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    X2_TAMEMP: {
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
    }
  }, {
    tableName: 'SX2010'
  });
};
