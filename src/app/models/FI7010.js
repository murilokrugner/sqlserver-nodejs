/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FI7010', {
    FI7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI7_PRFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI7_NUMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI7_PARORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI7_TIPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI7_CLIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI7_LOJORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI7_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI7_PRFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI7_NUMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI7_PARDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI7_TIPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI7_CLIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI7_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI7_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI7_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FI7_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    }
  }, {
    tableName: 'FI7010'
  });
};
