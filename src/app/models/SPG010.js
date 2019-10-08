/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPG010', {
    PG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PG_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PG_HORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PG_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PG_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PG_APONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PG_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PG_RELOGIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PG_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_GIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PG_TPMARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PG_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PG_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PG_NUMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PG_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PG_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PG_DATAAPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PG_SEMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_NUMREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    PG_TPMCREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PG_SEQJRN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PG_TIPOREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PG_MOTIVRG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    PG_EMPORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_FILORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PG_MATORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PG_DHORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    PG_IDORG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PG_DATAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PG_HORAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PG_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PG_PAPONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
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
    tableName: 'SPG010'
  });
};
