/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCE010', {
    TCE_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCE_CODMON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCE_CODCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCE_LIMMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCE_LIMMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCE_FREQUE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TCE_TIPFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TCE_DTMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TCE_HRMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TCE_CODLAB: {
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
    }
  }, {
    tableName: 'TCE010'
  });
};
