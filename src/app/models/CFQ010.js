/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CFQ010', {
    CFQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFQ_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    CFQ_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CFQ_TIPEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CFQ_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CFQ_FORMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CFQ_NATOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    CFQ_VLPERI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFQ_STATUS: {
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
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CFQ010'
  });
};
