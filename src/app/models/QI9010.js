/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QI9010', {
    QI9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI9_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI9_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI9_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI9_REVFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI9_AGREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI9_PLAGRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI9_REVPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'QI9010'
  });
};
