/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDP010', {
    RDP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDP_CODAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDP_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDP_DATFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDP_DATGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDP_INIRSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDP_RSPADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDP_RSPDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDP_RSPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDP_TIPENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDP_MSGAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDP_TIPCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDP_QTDCOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDP_MEMCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDP_MEMRSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDP_STATUS: {
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
    tableName: 'RDP010'
  });
};
