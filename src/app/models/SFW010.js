/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFW010', {
    FW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FW_NATRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FW_PER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FW_TOTRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FW_VLDISP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FW_TPREG: {
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
    },
    FW_CONSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FW_MESANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FW_APURPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SFW010'
  });
};
