/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NVK010', {
    NVK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NVK_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NVK_CGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NVK_CUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVK_CPESQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NVK_TIPOA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NVK_CCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NVK_CLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'NVK010'
  });
};
