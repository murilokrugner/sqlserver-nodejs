/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AN1010', {
    AN1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AN1_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AN1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    AN1_NIVSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AN1_INTQNC: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'AN1010'
  });
};
