/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FJS010', {
    FJS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FJS_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FJS_CARTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJS_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FJS_RCOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJS_TRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJS_TERCEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJS_BLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FJS_TIPOIN: {
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
    tableName: 'FJS010'
  });
};
