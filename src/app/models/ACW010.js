/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACW010', {
    ACW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACW_NUMCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACW_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACW_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACW_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACW_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACW_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACW_HORA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACW_HORA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACW_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ACW_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACW_ABRANG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACW_CODCON: {
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
    tableName: 'ACW010'
  });
};
