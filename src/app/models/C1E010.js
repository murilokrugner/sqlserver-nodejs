/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C1E010', {
    C1E_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C1E_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C1E_FILTAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C1E_CODFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    C1E_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                            '
    },
    C1E_CODFEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                             '
    },
    C1E_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_DTFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                            '
    },
    C1E_CLAFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_NATJUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_CNAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    C1E_INCOOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_INCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_ALIRAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C1E_FAP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C1E_AJURAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C1E_PRFRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_PRFFAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_SIGMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    C1E_NRCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    C1E_DTEMCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C1E_DTVCCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C1E_NRPRRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    C1E_DTPRRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C1E_DTDOU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C1E_PAGDOU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    C1E_NOMCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    C1E_CPFCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    C1E_DDDFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C1E_FONCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C1E_DDDCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C1E_CELCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C1E_DDDFAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C1E_FAXCNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C1E_ISEMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_SOCOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_SITESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_CRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_VERANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C1E_PROTUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    C1E_PROTPN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    C1E_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_DESFOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_REGELT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_MTBRUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_SIAFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_SITPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_RPPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_CODMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_MATRIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    C1E_LEIRPP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    C1E_SEGMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C1E_CDINAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    C1E_INDESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_DTCRPP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C1E_DTERPP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C1E_ENTEDU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_EFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_CPNJER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C1E_NMENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                   '
    },
    C1E_SUBTET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_VLRSUB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C1E_INDETT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_NRETT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C1E_INDDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_CNPJTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C1E_INDPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_INIPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_FINPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C1E_ASSDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_PRDRUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_PAA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C1E_PROCID: {
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
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C1E010'
  });
};
