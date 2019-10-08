/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AIA010', {
    AIA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AIA_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AIA_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AIA_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AIA_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AIA_DATDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AIA_DATATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AIA_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'AIA010'
  });
};
