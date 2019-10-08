/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE9010', {
    E9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E9_CODOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E9_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E9_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    E9_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    E9_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    E9_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E9_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E9_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E9_RENOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E9_DESTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    E9_TXACRES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E9_VLRCOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E9_COTAANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    E9_COTADIA: {
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
    tableName: 'SE9010'
  });
};
