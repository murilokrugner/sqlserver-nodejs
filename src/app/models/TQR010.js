/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TQR010', {
    TQR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQR_TIPMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TQR_DESMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TQR_FABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    TQR_CPPROD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQR_UNPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQR_VALALU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQR_CATBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TQR010'
  });
};
