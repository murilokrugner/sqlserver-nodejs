/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QP7010', {
    QP7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP7_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QP7_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP7_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP7_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QP7_SEQLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP7_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    QP7_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP7_MINMAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP7_NOMINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP7_LIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP7_LSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP7_LIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP7_LSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QP7_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP7_PLAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP7_DESPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    QP7_PA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QP7_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QP7_RVDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QP7_TEMNCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QP7_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QP7_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP7_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP7_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP7_ENSOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP7_CERTIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP7_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP7_REVIGR: {
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
    tableName: 'QP7010'
  });
};
