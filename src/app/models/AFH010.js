/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFH010', {
    AFH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFH_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFH_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFH_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFH_QTSEGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFH_QUJE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFH_NUMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFH_ITEMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFH_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFH_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFH_PLANEJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFH_VIAINT: {
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
    },
    AFH_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'AFH010'
  });
};
