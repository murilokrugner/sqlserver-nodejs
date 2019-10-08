/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AA1010', {
    AA1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA1_CODTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    AA1_NOMTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AA1_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AA1_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AA1_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA1_PAGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AA1_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AA1_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AA1_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AA1_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AA1_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA1_RATE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA1_EMINFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AA1_FUNPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA1_LIBOSV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_LOCLZB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA1_LOCLZR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA1_DULTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA1_LOCLZF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AA1_CULTES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA1_DATUES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA1_CATUES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA1_REQPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_DATADM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA1_DATDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AA1_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA1_NOMUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AA1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_CODUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA1_CONTRB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_TIPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_ALOCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA1_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA1_ACESSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    AA1_CDFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AA1_SEQTUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA1_PERQTD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_VISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_VISVLR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_VISPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_IMPPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_CATEGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_ALTVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_FTVIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_CRMSIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_FUNFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AA1_MPONTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_VINCUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_RSPMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_RSPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_EXTVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AA1_CNV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    AA1_NREDUZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AA1_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AA1_TIPMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'AA1010'
  });
};
