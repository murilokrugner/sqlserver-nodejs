/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SON010', {
    ON_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ON_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ON_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    ON_IDOBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ON_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    ON_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ON_CGC: {
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
    },
    ON_TPINSCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ON_TPOBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SON010'
  });
};
