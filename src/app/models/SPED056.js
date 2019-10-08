/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED056', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CODCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DATE_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DATE_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    },
    TOTVSCOLAB: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED056'
  });
};
