/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MBI010', {
    MBI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MBI_CODACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MBI_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MBI_FORCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    MBI_FORGRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                '
    },
    MBI_TIPACA: {
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
    tableName: 'MBI010'
  });
};
