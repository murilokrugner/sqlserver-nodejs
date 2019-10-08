/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED155', {
    ID_ENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    IMPARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    IMPDIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EXPARQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    EXPDIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    DESCRICAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    DETALHES: {
      type: "IMAGE",
      allowNull: true
    },
    DOCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    IMPDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    IMPHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EXPORTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    EXPDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EXPHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PRTDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    PRTHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    IMPRESSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    TRANSDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TRANSHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EXPXML: {
      type: "IMAGE",
      allowNull: true
    },
    IMPXML: {
      type: "IMAGE",
      allowNull: true
    },
    DOCXML: {
      type: "IMAGE",
      allowNull: true
    },
    PRIORIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DOCTIPO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    PRTVIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    IDENTIFICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    INUNUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    INUSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PROCTIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CONFDATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CONFHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SPED155'
  });
};
