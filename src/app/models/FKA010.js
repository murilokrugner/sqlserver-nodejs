/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FKA010', {
    FKA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FKA_IDFKA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FKA_IDPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    FKA_IDORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FKA_TABORI: {
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
    tableName: 'FKA010'
  });
};
