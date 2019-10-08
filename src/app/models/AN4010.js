/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AN4010', {
    AN4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AN4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AN4_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AN4_INTQNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    }
  }, {
    tableName: 'AN4010'
  });
};
