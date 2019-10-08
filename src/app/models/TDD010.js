/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TDD010', {
    TDD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TDD_CODFMR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDD_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TDD_ACONDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TDD_COLET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TDD_PESO: {
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
    tableName: 'TDD010'
  });
};
