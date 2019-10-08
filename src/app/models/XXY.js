/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXY', {
    XXY_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XXY_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    XXY_FUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XXY_STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XXY_UPDATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    tableName: 'XXY'
  });
};
