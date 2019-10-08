/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SND010', {
    ND_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ND_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ND_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    ND_CODRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ND_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ND_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ND_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ND_SEQUENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ND_RESPDES: {
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
    tableName: 'SND010'
  });
};
