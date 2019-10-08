/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDW010', {
    DW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DW_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DW_GRPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DW_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DW_INCLUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DW_EXCLUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DW_ALTERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
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
    tableName: 'SDW010'
  });
};
