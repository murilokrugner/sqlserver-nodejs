/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('F0J010', {
    F0J_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0J_PER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F0J_LIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0J_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0J_NUMTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    F0J_PRFTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F0J_PARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F0J_TPTIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    F0J_FORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    F0J_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0J_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0J_GNRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F0J_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F0J_TIPO: {
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
    tableName: 'F0J010'
  });
};
