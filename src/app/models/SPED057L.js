/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED057L', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    REMITO_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CHV_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    FCH_EMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FCH_SALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TXT_REMITO: {
      type: "IMAGE",
      allowNull: true
    },
    LT_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NOME_ARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    XML_ERP: {
      type: "IMAGE",
      allowNull: true
    },
    XML_AUTH: {
      type: "IMAGE",
      allowNull: true
    },
    XML_ERRO: {
      type: "IMAGE",
      allowNull: true
    },
    COD_AUTH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    NUM_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    DATE_RERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_RERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DATE_RTERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_RTERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AMBIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    PLANTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PORTA: {
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
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED057L'
  });
};
