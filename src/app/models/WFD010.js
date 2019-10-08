/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WFD010', {
    WFD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WFD_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    WFD_PROCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    WFD_SHAPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    WFD_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WFD_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    WFD_TASKID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    WFD_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
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
    tableName: 'WFD010'
  });
};
