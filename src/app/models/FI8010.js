/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FI8010', {
    FI8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI8_PRFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI8_NUMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI8_PARORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI8_TIPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI8_FORORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI8_LOJORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI8_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI8_PRFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI8_NUMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FI8_PARDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI8_TIPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FI8_FORDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FI8_LOJDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FI8_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FI8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FI8_DATA: {
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
    tableName: 'FI8010'
  });
};
