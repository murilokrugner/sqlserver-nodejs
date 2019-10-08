/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPED157', {
    IDENTIFICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DOCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DOCTIPO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    ARQUIVO: {
      type: "IMAGE",
      allowNull: true
    },
    DTGRAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRGRAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTLIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRLIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    XML_DOC: {
      type: "IMAGE",
      allowNull: true
    },
    STATUSPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    STATUSDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    STATUSDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                               '
    },
    STATUSDET: {
      type: "IMAGE",
      allowNull: true
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
    PRIORIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    PRTVIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
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
    tableName: 'SPED157'
  });
};
