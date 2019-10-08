/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED500', {
    ENTIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    XMLEVENTO: {
      type: "VARBINARY",
      allowNull: true
    },
    CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
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
    PROTOCOLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DTPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RECIBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    XMLRETEVEN: {
      type: "VARBINARY",
      allowNull: true
    },
    TPINSCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NUMINSCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    RETPROC: {
      type: "VARBINARY",
      allowNull: true
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    tableName: 'SPED500'
  });
};
