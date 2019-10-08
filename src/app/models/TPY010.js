/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TPY010', {
    TPY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TPY_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TPY_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TPY_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPY_CRITIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPY_QTDGAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPY_UNIGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPY_CONGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPY_QTDCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPY_LOCGAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPY_ALTER: {
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
    tableName: 'TPY010'
  });
};
