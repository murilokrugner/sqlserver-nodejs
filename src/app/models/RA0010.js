/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RA0010', {
    RA0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA0_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA0_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    RA0_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA0_ENDERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA0_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA0_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA0_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA0_CEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA0_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RA0_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA0_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    RA0_UTIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA0_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    RA0_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'RA0010'
  });
};
