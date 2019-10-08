/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AAK010', {
    AAK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAK_CODFAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAK_LOJAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAK_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AAK_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AAK_ACUMUL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAK_ACUTMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAK_TIPTMP: {
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
    tableName: 'AAK010'
  });
};
