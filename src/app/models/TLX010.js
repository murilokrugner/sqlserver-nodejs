/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TLX010', {
    TLX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLX_PROGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLX_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLX_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLX_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLX_INDCLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLX_TIPOSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLX_FUNINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLX_FUNFIM: {
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
    tableName: 'TLX010'
  });
};
