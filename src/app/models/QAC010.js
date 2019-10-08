/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QAC010', {
    QAC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QAC_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QAC_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QAC_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QAC_NIVSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    QAC_DESCCG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'QAC010'
  });
};
