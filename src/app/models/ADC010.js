/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADC010', {
    ADC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADC_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADC_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ADC_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADC_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ADC_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADC_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ADC_PROSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_LOJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADC_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ADC_PROVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_STAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_VERBA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADC_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADC_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ADC_FCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_FCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADC_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADC_NUMORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ADC_MODO: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ADC_SETOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ADC_CODCAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'ADC010'
  });
};
