/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED159', {
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DESCRICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    HABILITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EMAILDEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    ASSUNTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    INFOADIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                '
    },
    PARAMETRO: {
      type: "IMAGE",
      allowNull: true
    },
    INTERVALO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DATA_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HORA_PROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DATA_MAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HORA_MAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PROCESSA: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    TPNOTIFICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED159'
  });
};
