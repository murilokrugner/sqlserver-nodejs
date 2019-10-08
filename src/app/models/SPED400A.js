/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED400A', {
    ENTIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AMBIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CODEVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    PROTOCOLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DETSTATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
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
    DHRECEPCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DHPROCESSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    XMLERP: {
      type: "IMAGE",
      allowNull: true
    },
    XMLERRORET: {
      type: "IMAGE",
      allowNull: true
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED400A'
  });
};
