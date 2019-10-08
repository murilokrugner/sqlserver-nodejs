/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SX5010_BKP', {
    X5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    X5_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    X5_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    X5_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
    },
    X5_DESCSPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
    },
    X5_DESCENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
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
    tableName: 'SX5010_BKP'
  });
};
