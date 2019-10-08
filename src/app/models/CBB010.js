/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CBB010', {
    CBB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CBB_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CBB_CODINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CBB_USU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CBB_NCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CBB_STATUS: {
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
    tableName: 'CBB010'
  });
};
