/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPC010', {
    PC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PC_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PC_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PC_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PC_TPMARCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PC_QUANTC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PC_PDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PC_QUANTI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PC_ABONO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PC_QTABONO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PC_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PC_FLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PC_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PC_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PC_PERIODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PC_NUMPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PC_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PC_POSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    PC_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    PC_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PC_SEMANA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    PC_PERCENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PC_TIPOHE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PC_DATAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PC_HORAALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    PC_USUARIO: {
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
    tableName: 'SPC010'
  });
};
