/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NUB010', {
    NUB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUB_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUB_CCLIEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NUB_CLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NUB_CTPATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
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
    tableName: 'NUB010'
  });
};
