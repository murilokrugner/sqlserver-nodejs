/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MG3010', {
    MG3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MG3_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MG3_CODCCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MG3_CODPRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MG3_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MG3_PRECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'MG3010'
  });
};
