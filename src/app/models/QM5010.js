/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QM5010', {
    QM5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM5_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QM5_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM5_ENSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM5_CICLO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QM5_PECA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QM5_MEDIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM5_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QM5_PECA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QM5_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM5_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM5_CARAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QM5_ATRIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM5_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QM5_REFERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QM5_VLRREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QM5_CODIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'QM5010'
  });
};
