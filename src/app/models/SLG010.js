/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLG010', {
    LG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LG_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LG_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_IMPFISC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LG_PORTIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_IMPCUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PORTICP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_IMPCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LG_PORTCHQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_OPTICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PORTOPT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_PINPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PORTPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_CMC7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LG_CARTMAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PORTMC7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_PORTMAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_BALANCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_DIRBAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_REDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                               '
    },
    LG_IMPTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_IMPTEFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_TEFVIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LG_TIPTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LG_DIRTTX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                      '
    },
    LG_DIRTRX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                      '
    },
    LG_GAVETA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PORTGAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_PADMSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    LG_TEFCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LG_RPCSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LG_RPCPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_RPCENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_RPCEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LG_RPCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LG_RPCINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LG_INTCNS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    LG_DIRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LG_DIRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LG_DIREXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LG_REDECNS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LG_LOJACNS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LG_CTRCNS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LG_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LG_JOURNAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_COO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LG_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LG_DISPLAY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PORTDIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_TERMTEF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LG_GAVSTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    LG_TSCSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LG_TSCPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_MSGCUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                    '
    },
    LG_ORCSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LG_ORCPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_ORCENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_ORCEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LG_ORCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LG_WSSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_CRDIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_CRDVIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LG_TIPOATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_CRDXINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_PORTBAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_TIMEBAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LG_IPSITEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LG_DISPTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PORTTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LG_TAMSER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LG_TIPTELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_TOUCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    LG_LOGTEF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LG_SERPDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_WSSRVMT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LG_PAFMD5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    LG_LARGCOL: {
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
    LG_CRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    LG_NFCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    LG_ISPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_ECFINFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    LG_ALQINFO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    LG_RFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LG_IDRFID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LG_CODSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    LG_FABSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LG_MODSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LG_SERSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LG_USESAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    LG_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LG_SERNFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LG_CHVREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    LG_CHVVLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SLG010'
  });
};
