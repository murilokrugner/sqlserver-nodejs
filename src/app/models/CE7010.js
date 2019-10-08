/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CE7010', {
    CE7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE7_CODUTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CE7_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CE7_DESCR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CE7_VERSAO: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CE7010'
  });
};
