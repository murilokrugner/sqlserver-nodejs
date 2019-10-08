/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBG010', {
    BG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BG_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    BG_GERAOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG_GERAPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG_GERAEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    BG_GERAOPI: {
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
    tableName: 'SBG010'
  });
};
