/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLK010', {
    LK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LK_CODBAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LK_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LK_QUANT: {
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
    },
    LK_DTHRALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    }
  }, {
    tableName: 'SLK010'
  });
};
