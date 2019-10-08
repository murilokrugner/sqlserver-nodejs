/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('F0K010', {
    F0K_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0K_PER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F0K_LIVRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    F0K_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    F0K_CODAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    F0K_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    F0K_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    F0K_GNRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    F0K_SUBITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    F0K_TPLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                      '
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
    tableName: 'F0K010'
  });
};
