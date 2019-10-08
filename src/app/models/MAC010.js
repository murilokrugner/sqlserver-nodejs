/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MAC010', {
    MAC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAC_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAC_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MAC_CARTAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MAC_DEPNOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    MAC_DEPDTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MAC_DEPGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MAC_CART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    MAC_CODDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'MAC010'
  });
};
