/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QE7010', {
    QE7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE7_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QE7_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE7_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE7_ENSDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE7_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QE7_SEQLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE7_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE7_MINMAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE7_NOMINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE7_LIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE7_LSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE7_LIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE7_LSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QE7_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QE7_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QE7_PLAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE7_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QE7_REVDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QE7_AM_INS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QE7_DESPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    QE7_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                               '
    },
    QE7_OK: {
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
    tableName: 'QE7010'
  });
};
