/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QMI010', {
    QMI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMI_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMI_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMI_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QMI_ESCALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMI_PONTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMI_INSUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMI_ESCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMI_INCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMI_CSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMI_CSEQPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMI_REVQPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMI_DATQPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QMI_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'QMI010'
  });
};
