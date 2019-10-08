/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFW010', {
    AFW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFW_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFW_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFW_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFW_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFW_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    }
  }, {
    tableName: 'AFW010'
  });
};
