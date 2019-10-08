/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED156', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CANCDTAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CANCDTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CANCHRAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CANCNSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CANCXMLRET: {
      type: "IMAGE",
      allowNull: true
    },
    CCECORR: {
      type: "IMAGE",
      allowNull: true
    },
    CCEDTAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCEDTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCEHRAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCEHREMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CCENSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CCETZDEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CCEXMLRET: {
      type: "IMAGE",
      allowNull: true
    },
    DOCAMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DOCCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DOCDTAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DOCDTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DOCHRAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DOCNSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DOCSIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DOCSITCONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DOCTPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DOCVTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DOCXMLRET: {
      type: "IMAGE",
      allowNull: true
    },
    EMITCNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    EMITCPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    EMITIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    EMITNOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RESPMOT: {
      type: "IMAGE",
      allowNull: true
    },
    RESPSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TOTVSCOLAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ZIPNFE: {
      type: "IMAGE",
      allowNull: true
    },
    ZIPPROC: {
      type: "IMAGE",
      allowNull: true
    },
    ZIPPROT: {
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
    RESPDTHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RESPGSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RESPGMOT: {
      type: "IMAGE",
      allowNull: true
    },
    STATDOWN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    ENCDTHREMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    ENCDTHRAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    ENCNSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    ENCXMLRET: {
      type: "VARBINARY",
      allowNull: true
    },
    ENCCODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    ENCDTENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CONDTHREMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    CONDTHRAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    CONDNSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CONDCPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    CONDNOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CONDXMLRET: {
      type: "VARBINARY",
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DESTCNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    }
  }, {
    tableName: 'SPED156'
  });
};
