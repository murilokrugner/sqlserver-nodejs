/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA8010', {
    MA8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MA8_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MA8_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MA8_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA8_EMPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    MA8_CODEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MA8_DTADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA8_DTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA8_RENDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MA8_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MA8_CPFCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    MA8_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'MA8010'
  });
};
