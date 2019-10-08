/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SP8010', {
    P8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P8_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P8_HORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P8_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P8_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P8_APONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P8_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P8_RELOGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P8_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_GIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P8_TPMARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_PAPONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    P8_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    P8_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P8_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P8_NUMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P8_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P8_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    P8_DATAAPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P8_SEMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_NUMREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    P8_TPMCREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P8_SEQJRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P8_TIPOREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P8_MOTIVRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    P8_EMPORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_FILORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P8_MATORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P8_DHORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    P8_IDORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P8_DATAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P8_HORAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P8_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'SP8010'
  });
};
