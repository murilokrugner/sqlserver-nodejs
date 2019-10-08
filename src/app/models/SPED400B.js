/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED400B', {
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
    STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    PROTOCOLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DTGERACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRGERACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    DHRECEPCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CODRECEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AGENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XMLLOTE: {
      type: "IMAGE",
      allowNull: true
    },
    XMLRET: {
      type: "IMAGE",
      allowNull: true
    },
    XMLERRORET: {
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
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DSCRECEITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    }
  }, {
    tableName: 'SPED400B'
  });
};
