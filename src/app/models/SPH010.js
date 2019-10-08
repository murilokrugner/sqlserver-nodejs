/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPH010', {
    PH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PH_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PH_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PH_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PH_TPMARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PH_PDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PH_QUANTC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PH_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PH_ABONO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PH_QTABONO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PH_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PH_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PH_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PH_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PH_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PH_NUMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PH_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PH_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PH_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PH_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PH_SEMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PH_PERCENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PH_TIPOHE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PH_DATAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PH_HORAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PH_USUARIO: {
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
    tableName: 'SPH010'
  });
};
