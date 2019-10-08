/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TS6010', {
    TS6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS6_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TS6_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS6_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TS6_VALOR: {
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
    tableName: 'TS6010'
  });
};
