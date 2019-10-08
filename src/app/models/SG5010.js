/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SG5010', {
    G5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    G5_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    G5_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    G5_DATAREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    G5_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    G5_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    SG5_USER: {
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
    G5_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    G5_DATVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    G5_PROXREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    G5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SG5010'
  });
};
