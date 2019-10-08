/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFV010', {
    FV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FV_NATRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FV_PER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV_TOTRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FV_VLDISP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FV_TPREG: {
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
    FV_CONSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FV_MESANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FV_APURPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SFV010'
  });
};
