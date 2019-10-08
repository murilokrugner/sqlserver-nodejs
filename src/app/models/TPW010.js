/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TPW010', {
    TPW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TPW_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPW_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPW_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TPW_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPW_SEQREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TPW_DTORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPW_DTREAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPW_POSCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPW_DTLEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPW_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPW_TERMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPW_USUCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TPW_USULEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TPW_DTULTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPW_COULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPW_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TPW_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPW_TEMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPW_ACUMCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPW_VIRACO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPW_VARDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPW_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TPW_TIPOLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPW_SEQUEN: {
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
    }
  }, {
    tableName: 'TPW010'
  });
};
