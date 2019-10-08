/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUA010', {
    QUA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUA_NUMAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUA_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QUA_ALOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUA_ALOCFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QUA_TIPAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUA_MOTAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUA_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QUA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUA_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QUA_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QUA_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QUA_SITUAC: {
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
    tableName: 'QUA010'
  });
};
