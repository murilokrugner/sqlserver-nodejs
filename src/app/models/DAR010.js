/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DAR010', {
    DAR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAR_FILENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAR_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DAR_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DAR_LATITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DAR_LONGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    },
    DAR_PTOREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    }
  }, {
    tableName: 'DAR010'
  });
};
