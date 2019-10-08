/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CN5010', {
    CN5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN5_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CN5_IMPGCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN5_IMPFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN5_MODULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CN5_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CN5_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CN5_CODOPC: {
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
    tableName: 'CN5010'
  });
};
