/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CS8990', {
    CS8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS8_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS8_CODSIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS8_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    CS8_QUALIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CS8_CODASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CS8_CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS8_CRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS8_CGC: {
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
    }
  }, {
    tableName: 'CS8990'
  });
};
