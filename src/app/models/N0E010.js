/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N0E010', {
    N0E_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N0E_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N0E_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N0E_CODATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N0E_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N0E_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    N0E_CLICGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    N0E_CLIEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N0E_CLIBAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    N0E_CLICEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N0E_CLIMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    N0E_CLIUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N0E_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    N0E_QUANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N0E_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N0E_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N0E_NOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N0E_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
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
    tableName: 'N0E010'
  });
};
