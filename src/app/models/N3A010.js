/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N3A010', {
    N3A_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3A_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N3A_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N3A_DOSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N3A_IDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N3A_APLICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N3A_PROCED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    tableName: 'N3A010'
  });
};
