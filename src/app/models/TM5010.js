/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TM5010', {
    TM5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM5_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TM5_EXAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM5_DTPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TM5_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM5_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM5_FILFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TM5_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM5_ORIGEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM5_PCMSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM5_DTRESU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TM5_CODRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TM5_INDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM5_NATEXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM5_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TM5_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TM5_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TM5_CBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM5_NUMASO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TM5_TNOTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TM5_DESRES: {
      type: "IMAGE",
      allowNull: true
    },
    TM5_EXAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM5_INDAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM5_ORIAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TM5_HRPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    TM5_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TM5_USERGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TM5_CODDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TM5_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    }
  }, {
    tableName: 'TM5010'
  });
};
