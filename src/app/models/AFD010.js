/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFD010', {
    AFD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFD_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFD_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFD_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFD_PREDEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFD_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFD_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFD_HRETAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFD_TPVREL: {
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
    tableName: 'AFD010'
  });
};
