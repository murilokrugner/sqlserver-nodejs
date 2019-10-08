/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNS010', {
    TNS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNS_MANDAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNS_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNS_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNS_PRESEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNS_DTREUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNS_NOMPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TNS_HRREUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNS_TIPPAR: {
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
    tableName: 'TNS010'
  });
};
