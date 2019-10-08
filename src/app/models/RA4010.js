/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RA4010', {
    RA4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA4_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA4_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA4_SINONI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA4_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA4_VALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA4_NOTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA4_DURACA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA4_UNDURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA4_PRESEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA4_DATAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA4_DATAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA4_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA4_HORAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA4_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA4_TURMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA4_EFICAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA4_EFICSN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA4_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA4_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA4_DTALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RA4_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RA4_CONTEU: {
      type: "IMAGE",
      allowNull: true
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
    RA4_CATCUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'RA4010'
  });
};
