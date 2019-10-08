/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CNA010', {
    CNA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNA_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CNA_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNA_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNA_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNA_LJFORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNA_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNA_LOJACL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CNA_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNA_VLTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNA_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNA_TIPPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNA_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNA_CRONOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNA_ESPEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNA_FLREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNA_DTMXMD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNA_CRONCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNA_VLCOMS: {
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
    },
    CNA_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNA_PERREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNA_QTDREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNA_DIASEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNA_DIAMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNA_PROMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNA_ULTMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNA_MEDEFE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNA_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNA_UNPERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNA_PROPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CNA_PERI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNA_MODORJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNA_RECMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNA_PRORAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CNA_DTREAJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNA_PROXRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CNA_RPGANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CNA010'
  });
};
