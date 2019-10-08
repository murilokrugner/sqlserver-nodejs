/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNQ010', {
    TNQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNQ_MANDAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNQ_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNQ_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNQ_DTSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNQ_TIPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNQ_INDICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNQ_INDFUN: {
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
    },
    TNQ_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNQ_MANEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'TNQ010'
  });
};
