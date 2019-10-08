/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AGB010', {
    AGB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AGB_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AGB_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AGB_CODENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AGB_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AGB_PADRAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AGB_DDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AGB_DDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AGB_TELEFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AGB_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'AGB010'
  });
};
