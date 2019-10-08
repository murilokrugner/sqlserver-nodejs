/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DTN010', {
    DTN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTN_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTN_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTN_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTN_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTN_TIPREG: {
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
    tableName: 'DTN010'
  });
};
