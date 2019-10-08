/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ABJ010', {
    ABJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABJ_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABJ_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABJ_SUBITE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABJ_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABJ_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ABJ_TPREVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    ABJ_TORCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    ABJ_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABJ_SITATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABJ_CODTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    tableName: 'ABJ010'
  });
};
