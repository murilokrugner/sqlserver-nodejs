/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('D3H010', {
    D3H_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D3H_REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    D3H_DT_FIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3H_DT_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D3H_PERBLK: {
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
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'D3H010'
  });
};
