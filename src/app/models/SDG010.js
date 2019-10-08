/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDG010', {
    DG_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DG_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DG_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DG_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DG_CODDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DG_CODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DG_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DG_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DG_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_PERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DG_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DG_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DG_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DG_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DG_VALCOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_SALDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DG_DATVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DG_DATBAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DG_MOTBAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DG_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DG_AGENCIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DG_NUMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DG_NUMCHEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    DG_HISTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DG_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DG_SEQORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DG_SEQMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DG_DTLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DG_ITEMCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DG_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DG_PARC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DG_DTLAEMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DG_TIPUSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DG_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DG_NUMCTC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DG_INTMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DG_IDCTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DG_CODFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DG_LOJFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DG_TITGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DG_ORITIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DG_FILFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DG_DOCFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DG_SERFRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'SDG010'
  });
};
