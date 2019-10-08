/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBV010', {
    BV_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BV_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    BV_DESCTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    BV_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    BV_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
    },
    BV_TIPO: {
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
    tableName: 'SBV010'
  });
};
