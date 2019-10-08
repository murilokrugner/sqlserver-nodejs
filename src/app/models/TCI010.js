/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCI010', {
    TCI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCI_CODOCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TCI_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TCI_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TCI_QTDE: {
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
    tableName: 'TCI010'
  });
};
