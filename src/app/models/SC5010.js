/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC5010', {
    C5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_LOJACLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_LOJAENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_TIPOCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_CONDPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_VEND1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_COMIS1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_VEND2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_COMIS2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_VEND3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_COMIS3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_VEND4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_COMIS4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_VEND5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_COMIS5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DESC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_DESCFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_COTACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_PARC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DATA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_PARC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DATA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_PARC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DATA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_PARC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DATA4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_FRETAUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_REAJUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_PESOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_REIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_REDESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_VOLUME1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_VOLUME2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_VOLUME3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_VOLUME4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_ESPECI1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_ESPECI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_ESPECI3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_ESPECI4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_ACRSFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_MENNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    C5_MENPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_INCISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_LIBEROK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_NOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C5_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_KITREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_OS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_TIPLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_PEDEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C5_TXMOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_TPCARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_PDESCAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_BLQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_FORNISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_VLR_FRT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_MDCONTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_MDNUMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_GERAWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_MDPLANI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_SOLFRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_FECENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_SOLOPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_SUGENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_ESTPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_CODED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_NUMPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_ORCRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_RECISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_RECFAUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_MUNPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    C5_VEICULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_DESCMUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C5_SERSUBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_NFSUBST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C5_PREPEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_OBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_MOEDTIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    C5_X_MEMO: {
      type: "IMAGE",
      allowNull: true
    },
    C5_NTEMPEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    C5_TIPOBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_INDPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_NUMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C5_NATUREZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_TPCOMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_TABTRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_DTTXREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C5_TXREF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C5_CNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_FILGCT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_ARTOBRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_IMINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    C5_CGCINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C5_CLIINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    C5_PEDECOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C5_RASTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_SDOCSUB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_ECSEDEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    C5_ECPRESN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_VOLTAPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_ECVINCU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_CODEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C5_REMCTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_REMREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C5_TRCNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_CODVGLP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C5_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    C5_RET20G: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C5_PLACA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    C5_CODSAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C5_PLACA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    C5_MODANP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C5_SLENVT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SC5010'
  });
};
