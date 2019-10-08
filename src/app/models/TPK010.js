/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TPK010', {
    TPK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TPK_CODFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPK_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TPK_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPK_CRITIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPK_QTDGAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPK_UNIGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPK_CONGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPK_QTDCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPK_TIPMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TPK_LOCGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPK_ALTER: {
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
    tableName: 'TPK010'
  });
};
