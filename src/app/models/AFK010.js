/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFK010', {
    AFK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFK_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFK_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AFK_PLANEJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFK_DATAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFK_DATAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFK_GERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFK_TRFDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFK_TRFATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFK_GRPDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFK_GRPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFK_PRDDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFK_PRDATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFK_ALMOX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AFK_GRTDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFK_GRTATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFK_GERSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFK_TPPLAN: {
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
    tableName: 'AFK010'
  });
};
