/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CPM010', {
    CPM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPM_SUGEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPM_FILABA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPM_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CPM_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CPM_TIPO: {
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
    tableName: 'CPM010'
  });
};
