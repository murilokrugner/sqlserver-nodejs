/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPR010', {
    QPR_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPR_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    QPR_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QPR_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QPR_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPR_LABOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QPR_ENSAIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_DTMEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_HRMEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPR_AMOSTR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    QPR_ENSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QPR_RESULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPR_MBROWS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QPR_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_RASTRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPR_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_ENTINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QPR_ENTNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QPR_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPR_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QPR_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QPR_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QPR_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPR_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPR_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QPR_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QPR_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QPR_RVDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'QPR010'
  });
};
