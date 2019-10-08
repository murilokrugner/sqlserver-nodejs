/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AD5010', {
    AD5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD5_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD5_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD5_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD5_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD5_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD5_PROSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD5_LOJPRO: {
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
    },
    AD5_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AD5_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'AD5010'
  });
};
