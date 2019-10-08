/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC9010', {
    C9_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C9_QTDLIB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C9_NFISCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C9_SERIENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C9_DATALIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C9_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C9_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C9_AGREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    C9_IDENTB6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_VENDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_BLEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_BLCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_BLOQUEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_LOTECTL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C9_NUMLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_NUMSERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C9_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C9_ITEMREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_DTVALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C9_RESERVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_QTDRESE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C9_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_BLWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_CARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_SEQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_SEQENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_SERVIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C9_STSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C9_ENDPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C9_TPESTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_TPCARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C9_PROJPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C9_EDTPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    C9_TASKPMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    C9_QTDLIB2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C9_LICITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_POTENCI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C9_SERIREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C9_BLINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C9_LOTNFC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_BLTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C9_REGWMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C9_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_NUMCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C9_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C9_RETOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C9_IDDCF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_DAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C9_ORDSEP: {
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
    },
    C9_TPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C9_FILAGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C9_DATENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C9_SDOCNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C9_SDOCREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C9_SOLFLG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C9_ROMEMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SC9010'
  });
};
