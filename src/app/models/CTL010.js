/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTL010', {
    CTL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTL_LP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTL_KEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    CTL_ORDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTL_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTL_EXECUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTL_ALIAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTL_QCDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTL_QCDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CTL_QCMOED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTL_QCVLRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTL_QCCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'CTL010'
  });
};
