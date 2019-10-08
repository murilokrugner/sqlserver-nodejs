/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RD6010', {
    RD6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD6_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD6_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RD6_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_CODMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD6_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD6_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD6_INTMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD6_INIGER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD6_INIRSP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD6_RSPADO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD6_RSPDOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD6_RSPCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RD6_AUTOAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD6_CODRSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_IDUSUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_GRUUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_CODCAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_CODROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_SIMULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD6_MONTAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD6_CRITER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_DTCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD6_MENSAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD6_MAUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_MAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_MCONS: {
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
    },
    RD6_CODPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD6_CONLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RD6_CONREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'RD6010'
  });
};
