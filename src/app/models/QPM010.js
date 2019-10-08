/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPM010', {
    QPM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPM_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QPM_DTPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPM_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QPM_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QPM_DTENLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPM_HRENLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPM_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPM_DESLAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QPM_DTLAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPM_HRLAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPM_DTVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPM_TAMLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPM_QTREJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPM_DTDILA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPM_HRDILA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPM_JUSTLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QPM_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    QPM_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPM_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPM_NUMSER: {
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
    tableName: 'QPM010'
  });
};
