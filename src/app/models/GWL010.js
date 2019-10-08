/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GWL010', {
    GWL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GWL_NROCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWL_NRDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GWL_FILDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GWL_EMITDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWL_SERDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    GWL_TPDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWL_SDOCDC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'GWL010'
  });
};
