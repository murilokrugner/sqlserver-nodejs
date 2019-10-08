/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SR3010', {
    R3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R3_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    R3_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    R3_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    R3_PD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    R3_DESCPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    R3_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R3_ANTEAUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R3_DTCDISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    R3_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    R3_TABNIVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R3_TABFAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R3_CTABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    R3_CTABNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R3_CTABFAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    R3_PERCCOM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R3_CSALAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    R3_TPSBCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R3_INTGTAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SR3010'
  });
};
