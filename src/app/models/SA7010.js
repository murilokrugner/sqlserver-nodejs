/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SA7010', {
    A7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A7_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    A7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    A7_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A7_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    A7_DESCCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    A7_PRECO01: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO02: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO03: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO04: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO05: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO06: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO07: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF07: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO08: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF08: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO09: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF09: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO10: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF10: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO11: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF11: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_PRECO12: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_DTREF12: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    A7_SERVTIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    A7_LVLEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_LPSEMB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_IDADEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_PERCUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    A7_UMNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    A7_X_DSCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    }
  }, {
    tableName: 'SA7010'
  });
};
