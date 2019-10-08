/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCA010', {
    CA_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CA_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CA_OS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CA_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CA_TECNICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CA_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CA_HOR1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CA_HOR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CA_HOR3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CA_HOR4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CA_FAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CA_MOVIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CA_DTDIGIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CA_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CA_NFISCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CA_HORABAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CA_HORAFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CA_PACOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CA_DTMOVIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CA_FILIAL: {
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
    }
  }, {
    tableName: 'SCA010'
  });
};
