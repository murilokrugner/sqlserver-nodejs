/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QU5010', {
    QU5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QU5_USERNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QU5_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QU5_SOBREN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QU5_NICKNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QU5_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
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
    tableName: 'QU5010'
  });
};
