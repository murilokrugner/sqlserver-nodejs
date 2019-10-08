/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QI2010', {
    QI2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_FNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI2_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QI2_TPNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI2_TPFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI2_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI2_DISPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QI2_DDETA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_COMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_CODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_CODEFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_CODCAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_CODCAU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_CODDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QI2_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_OCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_CONPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_CONREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_DOCUME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI2_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_ORIDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QI2_FILDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_DESDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QI2_FILRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_MATRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QI2_ANEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QI2_CODACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI2_REVACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_DEPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI2_INSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QI2_REVINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI2_CODDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QI2_RVDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    QI2_CODOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    QI2_CHKLST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QI2_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QI2_AREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QI2_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QI2_RAMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QI2_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QI2_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    QI2_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QI2_APLICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QI2_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QI2_QTDPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QI2_QTDDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QI2_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_CONTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI2_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_MATDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    QI2_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QI2_OBSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI2_MOTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QI2_NUMAUD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_NRCHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI2_ITEMCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_NUMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QI2_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI2_ITEMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI2_SIGILO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI2_NCHAMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'QI2010'
  });
};
