/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CR9010', {
    CR9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CR9_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CR9_CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CR9_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CR9_ATIVO: {
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
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CR9010'
  });
};
