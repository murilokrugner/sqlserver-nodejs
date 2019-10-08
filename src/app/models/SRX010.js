/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRX010', {
    RX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RX_TIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RX_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                     '
    },
    RX_TXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
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
    tableName: 'SRX010'
  });
};
