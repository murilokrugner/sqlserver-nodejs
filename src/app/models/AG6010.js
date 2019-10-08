/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AG6010', {
    AG6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AG6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AG6_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AG6_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AG6_CODPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AG6_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AG6_PROORI: {
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
    },
    AG6_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AG6_EDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    AG6_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AG6_VERORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'AG6010'
  });
};
