/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QQ6010', {
    QQ6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QQ6_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QQ6_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'QQ6010'
  });
};
