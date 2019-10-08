/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AJ1010', {
    AJ1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJ1_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AJ1_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJ1_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJ1_PREDEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJ1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AJ1_HRETAR: {
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
    tableName: 'AJ1010'
  });
};
