/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFJ010', {
    AFJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFJ_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFJ_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFJ_QEMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_QATU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFJ_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFJ_QEMP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_QATU2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AFJ_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFJ_PLANEJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFJ_ROTGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFJ_QEMPPR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_QEMPP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_EMPEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_EMPES2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFJ_IDSOLU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'AFJ010'
  });
};
