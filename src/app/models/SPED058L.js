/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED058L', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    COD_AUTH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    TXT_LOTE: {
      type: "IMAGE",
      allowNull: true
    },
    XML_RET: {
      type: "IMAGE",
      allowNull: true
    },
    XML_RETERR: {
      type: "IMAGE",
      allowNull: true
    },
    XML_RETAUT: {
      type: "IMAGE",
      allowNull: true
    },
    NUM_COMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                             '
    },
    DATE_GLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_GLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DATE_ELOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TIME_ELOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AMBIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'SPED058L'
  });
};
