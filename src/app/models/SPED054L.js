/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED054L', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    NFE_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CSTAT_SEFR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    XMOT_SEFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    NFE_PROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    XML_PROT: {
      type: "IMAGE",
      allowNull: true
    },
    XML_ERRO: {
      type: "IMAGE",
      allowNull: true
    },
    FCH_CBTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FCH_VENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AUTH_ID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    MOTI_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    REPROCESO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RESULTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XML_EVENT: {
      type: "IMAGE",
      allowNull: true
    },
    XML_OBSERV: {
      type: "IMAGE",
      allowNull: true
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    },
    DT_ENVLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HR_ENVLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DT_PROCLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HR_PROCLOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PDF: {
      type: "IMAGE",
      allowNull: true
    },
    IDCONSULTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED054L'
  });
};
