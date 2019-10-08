/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AJA010', {
    AJA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJA_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AJA_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AJA_EDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJA_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AJA_NUMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AJA_ITEMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJA_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AJA_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AJA_ITEM: {
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
    }
  }, {
    tableName: 'AJA010'
  });
};
