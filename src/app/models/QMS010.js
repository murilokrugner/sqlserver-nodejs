/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QMS010', {
    QMS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMS_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMS_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMS_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QMS_ESCALA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMS_PONTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMS_PADSEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMS_ESCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QMS_INCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QMS_CSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMS_CSEQPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMS_REVQPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QMS_DATQPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QMS_REVINV: {
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
    tableName: 'QMS010'
  });
};
