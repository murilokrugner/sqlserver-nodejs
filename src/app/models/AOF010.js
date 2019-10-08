/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AOF010', {
    AOF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AOF_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOF_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOF_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOF_DTCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOF_ASSUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AOF_DESCRI: {
      type: "IMAGE",
      allowNull: true
    },
    AOF_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AOF_PARTIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AOF_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOF_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOF_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOF_HRINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AOF_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOF_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AOF_CHGKEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                      '
    },
    AOF_DURACA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AOF_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AOF_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AOF_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AOF_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AOF_IDEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                      '
    },
    AOF_DTLEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOF_HRLEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AOF_PERCEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOF_CODUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AOF_DTCONC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOF_AGEREU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOF_EMLNAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    AOF_LASTMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AOF_TOKEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AOF_DTAEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AOF_ANEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AOF_DESTIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AOF_REMETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    AOF_TIPCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AOF_CHVCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AOF_CODCAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AOF_LNKIMG: {
      type: "IMAGE",
      allowNull: true
    },
    AOF_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'AOF010'
  });
};
