/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CS8010', {
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
      defaultValue: '                                                                                                                                                                                                                                                              '
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
    },
    CS8_UFCRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS8_SEQCRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CS8_DTCRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CS8_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CS8_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    CS8_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CS8010'
  });
};
