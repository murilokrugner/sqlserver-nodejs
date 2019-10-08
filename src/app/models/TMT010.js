/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMT010', {
    TMT_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMT_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMT_DTCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMT_HRCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMT_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMT_DTATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMT_HRATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMT_GRPCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TMT_CID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMT_GRPCI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TMT_CID2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMT_DIAGNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_DESATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_OCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMT_ACIDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_QTAFAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_QUEIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_HDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_CABECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_OLHOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_OUVIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_PESCOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_APRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_APDIGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_APCIRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_APURIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_MMIISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_PELE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_HISPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_EXAMEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_TEMPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_PREART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TMT_ALTURA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_MASSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TMT_OROFAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_OTOSCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_ABDOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_AUSCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_AUSPUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TMT_FILFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMT_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMT_CODUSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMT_CBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMT_MMSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TMT_MMII: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TMT_AVODSE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_AVOESE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_AVODCO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_AVOECO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_OUTROS: {
      type: "VARBINARY",
      allowNull: true
    },
    TMT_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_TIPDEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMT_CIDDEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMT_PULSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TMT_RESPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMT_DINAMO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_PRESIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_PREDIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMT_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TMT_HISSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_DIASYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_DATSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_QUESYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_HDASYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_CABSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_OLHSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_OUVSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_PESSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_APRSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_APDSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_APCSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_APUSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_MISSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_PELSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_EXFSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_ORFSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_OTSSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_ABDSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_AUCSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_AUPSYP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMT_HRRETO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    tableName: 'TMT010'
  });
};
