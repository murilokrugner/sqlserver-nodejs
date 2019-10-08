/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAI010', {
    AI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AI_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AI_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AI_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AI_DOMINIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AI_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI_GRUSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AI_QUANT: {
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
    tableName: 'SAI010'
  });
};
