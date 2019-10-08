/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFL010', {
    AFL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFL_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFL_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFL_NUMCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFL_ITEMCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFL_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFL_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AFL_PLANEJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFL_QTSEGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFL_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFL_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFL_CONFIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFL_QTCONF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'AFL010'
  });
};
