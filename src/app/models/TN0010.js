/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TN0010', {
    TN0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN0_NUMRIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TN0_DTRECO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TN0_AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN0_FONTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TN0_DTAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TN0_DTELIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TN0_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TN0_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TN0_CODTAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN0_QTAGEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TN0_QTEXPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TN0_INTERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TN0_LISASO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_MAPRIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_GRAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_CODAMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN0_INDEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_TECUTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TN0_SEFIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN0_EPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_MEDCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN0_NECEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_CODFAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TN0_SUBFAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TN0_ATISAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_ATIPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_ENQLEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    TN0_REPETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN0_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TN0_COMEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TN0_CATRIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_SITSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN0_PERINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_ADIFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_SI2SYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN0_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN0_DANSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN0_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'TN0010'
  });
};
