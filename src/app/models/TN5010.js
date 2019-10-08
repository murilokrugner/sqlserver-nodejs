/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TN5010', {
    TN5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN5_CODTAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN5_NOMTAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TN5_DESTAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    TN5_DESCR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TN5_DESCR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TN5_DESCR3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TN5_DESCR4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TN5_ESFORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN5_DESCRI: {
      type: "VARBINARY",
      allowNull: true
    },
    TN5_HRDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TN5_VESSYP: {
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
    }
  }, {
    tableName: 'TN5010'
  });
};
