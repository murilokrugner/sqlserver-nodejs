/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AC1010', {
    AC1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AC1_PROVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AC1_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AC1_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    AC1_TPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AC1_DTOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AC1_HTOTAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AC1_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AC1_STAUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    }
  }, {
    tableName: 'AC1010'
  });
};
