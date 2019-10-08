/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC2990', {
    C2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C2_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C2_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C2_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C2_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_DATPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_DATPRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C2_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_PRIOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C2_QUJE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_DATRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_DESTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_VATU1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINI1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VATU2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINI2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VATU3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINI3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VATU4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINI4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VATU5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINI5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRATU1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRINI1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFIM1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRATU2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRINI2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFIM2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRATU3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRINI3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFIM3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRATU4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRINI4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFIM4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRATU5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRINI5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFIM5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_DATAJI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_DATAJF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_AGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_PERDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_DTUPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_QTUPROG: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_SEQPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C2_HORAJI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    C2_HORAJF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    C2_ROTEIRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_RECURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C2_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C2_ITEMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    C2_QTSEGUM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APINFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APINFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APINFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APINFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APINFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APFIFF1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APFIFF2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APFIFF3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APFIFF4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APFIFF5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_TPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_REVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_CERQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    C2_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C2_OPERAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C2_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C2_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C2_LAUDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_VERIFI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C2_IDEINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C2_CHVQIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    C2_SEQMRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C2_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C2_MOPC: {
      type: "IMAGE",
      allowNull: true
    },
    C2_VFIMRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VFIMRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_VINIRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRIRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRIRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRIRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRIRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRIRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFRP1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFRP2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFRP3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFRP4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_APRFRP5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_BATROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    C2_PMICNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_BATCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_PMACNUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '(0)'
    },
    C2_BATUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    C2_PROGRAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    C2_BATORCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C2_ORDSEP: {
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
      defaultValue: '(0)',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'SC2990'
  });
};
