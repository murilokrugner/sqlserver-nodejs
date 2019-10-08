/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TPP010', {
    TPP_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TPP_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPP_PLANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPP_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TPP_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPP_SEQREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TPP_DTORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPP_POSCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPP_DTREAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPP_DTLEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPP_SITUAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPP_TERMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPP_USUCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TPP_USULEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TPP_DTULTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TPP_COULTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPP_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TPP_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TPP_VARDIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPP_ACUMCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPP_VIRACO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TPP_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TPP_TIPOLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPP_SEQUEN: {
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
    TPP_APROPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TPP_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'TPP010'
  });
};
