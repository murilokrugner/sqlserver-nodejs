/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N13010', {
    N13_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N13_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N13_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N13_APELID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N13_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    N13_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N13_TCORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N13_TCUNI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N13_TCFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N13_TCSFU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N13_PROGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N13_DESPRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N13_SUBPRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N13_DESCSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N13_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    N13_DESPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N13_RECVIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N13_RECCPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N13_LIMITE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N13_PREVRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N13_CTRREC: {
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
    }
  }, {
    tableName: 'N13010'
  });
};
