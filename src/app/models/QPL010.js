/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPL010', {
    QPL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPL_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QPL_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPL_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QPL_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QPL_DTENLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPL_HRENLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPL_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPL_DTLAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPL_HRLAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPL_DTVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPL_TAMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPL_QTREJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPL_DTDILA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPL_HRDILA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPL_JUSTLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QPL_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    QPL_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPL_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPL_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'QPL010'
  });
};
