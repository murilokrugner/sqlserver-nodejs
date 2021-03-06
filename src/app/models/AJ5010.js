/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AJ5010', {
    AJ5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJ5_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AJ5_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AJ5_EDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJ5_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJ5_PREDEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJ5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AJ5_HRETAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'AJ5010'
  });
};
