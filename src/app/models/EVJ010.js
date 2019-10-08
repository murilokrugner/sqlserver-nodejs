/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EVJ010', {
    EVJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EVJ_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EVJ_EX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EVJ_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EVJ_ALIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EVJ_ASSUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EVJ_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EVJ_DTFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EVJ_OBS: {
      type: "VARBINARY",
      allowNull: true
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
    tableName: 'EVJ010'
  });
};
