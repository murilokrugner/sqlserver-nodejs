/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RCC010', {
    RCC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCC_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RCC_FIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RCC_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RCC_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RCC_CONTEU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
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
    tableName: 'RCC010'
  });
};
