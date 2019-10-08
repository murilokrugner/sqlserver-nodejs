/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED400', {
    ENTIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AMBIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CODEVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PROTOCOLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DTENTRADA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRENTRADA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DETSTATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    DTTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRTRANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CODRECEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DSCRECEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XMLERP: {
      type: "IMAGE",
      allowNull: true
    },
    XMLRET: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    REQ_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DT_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    XMLSIG: {
      type: "VARBINARY",
      allowNull: true
    },
    RETPROC: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'SPED400'
  });
};
