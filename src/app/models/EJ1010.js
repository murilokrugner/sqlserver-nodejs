/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EJ1010', {
    EJ1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJ1_CODE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJ1_ENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJ1_CODS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJ1_SAIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'EJ1010'
  });
};
