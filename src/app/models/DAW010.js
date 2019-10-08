/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DAW010', {
    DAW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAW_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DAW_CODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAW_IDRAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DAW_CODRAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAW_LOJRAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAW_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DAW_MSBLQD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'DAW010'
  });
};
