/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AJO010', {
    AJO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJO_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AJO_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AJO_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJO_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AJO_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AJO_OBRIGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AJO_REPEXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AJO_INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                 '
    },
    AJO_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                 '
    },
    AJO_MARK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    },
    AJO_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJO_WFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                '
    }
  }, {
    tableName: 'AJO010'
  });
};
