/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRA010', {
    TRA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRA_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TRA_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRA_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TRA_MEDIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TRA_BANDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TRA_CUSTO: {
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
    tableName: 'TRA010'
  });
};
