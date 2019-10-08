/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QP8010', {
    QP8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP8_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QP8_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP8_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP8_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QP8_SEQLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP8_TEXTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QP8_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QP8_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP8_PLAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP8_PA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QP8_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QP8_RVDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QP8_AM_INS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP8_CODREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP8_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QP8_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QP8_DESPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    QP8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP8_ENSOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP8_CERTIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QP8_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QP8_REVIGR: {
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
    tableName: 'QP8010'
  });
};
