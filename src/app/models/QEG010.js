/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEG010', {
    QEG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QEG_SITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEG_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEG_NIVING: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEG_NIVESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QEG_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QEG_IQI_I: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEG_IQI_S: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QEG_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'QEG010'
  });
};
