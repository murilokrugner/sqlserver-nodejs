/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SY1010', {
    Y1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Y1_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Y1_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y1_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    Y1_TEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Y1_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Y1_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Y1_GRAPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y1_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Y1_GRUPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y1_GRAPRCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Y1_ACCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
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
    tableName: 'SY1010'
  });
};
