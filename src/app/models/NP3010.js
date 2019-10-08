/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NP3010', {
    NP3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NP3_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NP3_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'NP3010'
  });
};
