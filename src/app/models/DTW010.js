/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DTW010', {
    DTW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTW_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTW_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTW_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTW_TIPOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTW_DATPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTW_HORPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTW_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTW_HORINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTW_DATREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTW_HORREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTW_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTW_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTW_ATIVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTW_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTW_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTW_FILATI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTW_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTW_FILATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTW_CATOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTW_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DTW_DATAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTW_HORAJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTW_HORATR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    DTW_IDMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTW_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTW_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'DTW010'
  });
};
